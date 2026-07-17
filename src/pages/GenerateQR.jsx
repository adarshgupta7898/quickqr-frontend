import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import { PageLoader } from '../components/common/Loader';
import { generateQr, downloadQr } from '../services/api';
import { QR_TYPES } from '../constants';
import { buildDownloadFileName, copyToClipboard, formatDate } from '../utils';

const GenerateQR = () => {
  const [form, setForm] = useState({ title: '', type: 'URL', content: '' });
  const [fieldErrors, setFieldErrors] = useState({ content: '' });
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [generatedQR, setGeneratedQR] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (name === 'content') {
      setFieldErrors((current) => ({ ...current, content: value.trim() ? '' : 'Content is required.' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = { content: form.content.trim() ? '' : 'Content is required.' };
    setFieldErrors(nextErrors);

    if (nextErrors.content) {
      toast.error(nextErrors.content);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title: form.title.trim() || undefined,
        type: form.type,
        content: form.content.trim(),
      };

      const response = await generateQr(payload);
      setGeneratedQR(response);
      setForm({ title: '', type: 'URL', content: '' });
      setFieldErrors({ content: '' });
      toast.success('QR code generated successfully.');
    } catch (error) {
      const message = error?.response?.data?.message || 'Unable to generate the QR code right now.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!generatedQR?.content) return;
    try {
      await copyToClipboard(generatedQR.content);
      toast.success('Content copied to clipboard.');
    } catch {
      toast.error('Unable to copy content right now.');
    }
  };

  const handleDownload = async () => {
    if (!generatedQR?.id) return;
    setDownloading(true);
    try {
      const url = downloadQr(generatedQR.id);
      const filename = buildDownloadFileName(generatedQR.title || 'qr-code');
      const link = Object.assign(document.createElement('a'), {
        href: url,
        download: filename,
        target: '_blank',
      });

      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('QR image downloaded.');
    } catch (error) {
      const message = error?.response?.data?.message || 'Unable to download the QR image.';
      toast.error(message);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <Card title="Generate QR code" description="Create a QR code using a title, type, and content.">
        <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <Input label="Title" name="title" value={form.title} onChange={handleChange} placeholder="My Website" />
          <Select label="Type" name="type" value={form.type} onChange={handleChange}>
            {QR_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <div className="md:col-span-2">
            <Input label="Content" name="content" value={form.content} onChange={handleChange} placeholder="https://example.com" error={fieldErrors.content} />
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-3">
            <Button type="submit" loading={loading}>
              {loading ? 'Generating...' : 'Generate'}
            </Button>
            <Button variant="secondary" type="button" onClick={() => {
              setForm({ title: '', type: 'URL', content: '' });
              setFieldErrors({ content: '' });
            }}>
              Reset
            </Button>
          </div>
        </form>
      </Card>

      {loading ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <PageLoader />
        </div>
      ) : generatedQR ? (
        <Card title="Generated QR" description="Your QR code is ready to use.">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <img src={generatedQR.imageUrl} alt="Generated QR" className="h-64 w-full rounded-xl object-contain" loading="lazy" />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Preview</p>
                <h3 className="text-2xl font-bold text-slate-900">{generatedQR.title || 'Untitled QR'}</h3>
                <p className="text-sm text-slate-600">Type: {generatedQR.type}</p>
                <p className="text-sm text-slate-600">Created: {formatDate(generatedQR.createdAt)}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-sm font-semibold text-slate-700">Content</p>
                <p className="break-all text-sm text-slate-600">{generatedQR.content}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleDownload} loading={downloading}>
                  {downloading ? 'Downloading...' : 'Download'}
                </Button>
                <Button variant="secondary" onClick={handleCopy}>
                  Copy content
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default GenerateQR;
