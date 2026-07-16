import { useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdWarningAmber } from "react-icons/md";
import Button from "./Button";

/**
 * Animated confirmation modal.
 *
 * @param {{
 *   open:          boolean,
 *   title?:        string,
 *   description?:  string,
 *   confirmLabel?: string,
 *   cancelLabel?:  string,
 *   loading?:      boolean,
 *   onConfirm:     () => void,
 *   onCancel:      () => void,
 * }} props
 */
export default function Modal({
  open,
  title        = "Are you sure?",
  description  = "This action cannot be undone.",
  confirmLabel = "Delete",
  cancelLabel  = "Cancel",
  loading      = false,
  onConfirm,
  onCancel,
}) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onCancel?.(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onCancel]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4
                     bg-black/40 backdrop-blur-sm"
          onClick={onCancel}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{   opacity: 0, scale: 0.9, y: 24  }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            <div className="flex flex-col items-center text-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                <MdWarningAmber className="text-red-500 text-3xl" />
              </div>
              <h3 id={titleId} className="text-lg font-bold text-slate-800">{title}</h3>
              <p id={descriptionId} className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={onCancel}
                disabled={loading}
              >
                {cancelLabel}
              </Button>
              <Button
                variant="danger"
                className="flex-1"
                onClick={onConfirm}
                loading={loading}
              >
                {confirmLabel}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
