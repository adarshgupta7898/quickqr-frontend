/**
 * Labeled select dropdown with optional error message.
 *
 * @param {{
 *   label?:       string,
 *   error?:       string,
 *   options?:     { value: string, label: string }[],
 *   placeholder?: string,
 *   id?:          string,
 *   className?:   string,
 * } & React.SelectHTMLAttributes<HTMLSelectElement>} props
 */
export default function Select({
  label,
  error,
  options      = [],
  placeholder  = "Select an option",
  id,
  className    = "",
  ...rest
}) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={selectId} className="field-label">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`field-input appearance-none cursor-pointer ${
          error ? "border-red-400 focus:ring-red-400" : ""
        } ${className}`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${selectId}-error` : undefined}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
