import { motion } from "framer-motion";

const VARIANTS = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  danger:    "btn-danger",
  ghost:     "btn-ghost",
};

const SIZES = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

/**
 * Animated, accessible button.
 *
 * @param {{
 *   variant?:  "primary"|"secondary"|"danger"|"ghost",
 *   size?:     "sm"|"md"|"lg",
 *   loading?:  boolean,
 *   children:  React.ReactNode,
 *   className?: string,
 * } & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export default function Button({
  variant   = "primary",
  size      = "md",
  loading   = false,
  children,
  className = "",
  disabled,
  type      = "button",
  ...rest
}) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{   scale: isDisabled ? 1 : 0.97 }}
      className={`${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      disabled={isDisabled}
      aria-busy={loading ? "true" : undefined}
      aria-disabled={isDisabled ? "true" : undefined}
      {...rest}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor" strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
}
