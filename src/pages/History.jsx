import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { PageLoader } from '../components/common/Loader';
import { useQRHistory } from '../hooks/useQRHistory';
import { deleteQRCode, downloadQRCode } from '../services/api';
import { buildDownloadFileName, formatDate } from '../utils';

const History = () => {
  const { history, loading, error, refetch } = useQRHistory();
  const [selectedItem, setSelectedItem] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  const handleDelete = async () => {
    if (!selectedItem?.id) return;

    setDeletingId(selectedItem.id);
    try {
      await deleteQRCode(selectedItem.id);
      toast.success('QR code deleted.');
      await refetch();
    } catch (error) {
      const message = error?.response?.data?.message || 'Unable to delete the QR code.';
      toast.error(message);
    } finally {
      setDeletingId(null);
      setSelectedItem(null);
    }
  };

  const handleDownload = async (item) => {
    if (!item?.id) return;

    setDownloadingId(item.id);
    try {
      const title = item.title || 'qr-code';
      await downloadQRCode(item.id, buildDownloadFileName(title));
      toast.success('QR image downloaded.');
    } catch (error) {
      const message = error?.response?.data?.message || 'Unable to download the QR image.';
      toast.error(message);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">QR history</h1>
        <p className="mt-1 text-sm text-slate-500">Your previously generated QR codes appear here.</p>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <PageLoader />
        </div>
      ) : error ? (
        <Card title="Unable to load history" description="The request to the server failed.">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-slate-600">Please try again in a moment.</p>
            <Button variant="secondary" onClick={() => refetch()}>
              Retry
            </Button>
          </div>
        </Card>
      ) : history.length === 0 ? (
        <Card title="No history yet" description="Generate your first QR code to see it here.">
          <p className="text-sm text-slate-600">Your recent QR entries will appear in this view once the backend responds.</p>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {history.map((item) => (
            <Card key={item.id} title={item.title || 'Untitled QR'} description={item.type || 'QR'}>
              <div className="space-y-4">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title || 'QR code'} className="h-48 w-full rounded-xl border border-slate-200 object-contain bg-slate-50" loading="lazy" />
                ) : (
                  <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
                    QR image unavailable
                  </div>
                )}
                <div className="space-y-2 text-sm text-slate-600">
                  <p className="break-all">{item.content}</p>
                  <p>Created: {formatDate(item.createdAt)}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={() => handleDownload(item)} loading={downloadingId === item.id}>
                    {downloadingId === item.id ? 'Downloading...' : 'Download'}
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => setSelectedItem(item)}>
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        open={Boolean(selectedItem)}
        title="Delete QR code"
        description="This action will remove the selected QR code from your history and delete its image."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        loading={Boolean(deletingId)}
        onConfirm={handleDelete}
        onCancel={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default History;
