/**
 * Labeled text input with optional error message.
 *
 * @param {{
 *   label?:    string,
 *   error?:    string,
 *   id?:       string,
 *   className?: string,
 * } & React.InputHTMLAttributes<HTMLInputElement>} props
 */
export default function Input({ label, error, id, className = "", ...rest }) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={inputId} className="field-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`field-input ${
          error ? "border-red-400 focus:ring-red-400" : ""
        } ${className}`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
