import { motion } from "framer-motion";

/**
 * Animated card container.
 *
 * @param {{
 *   children:   React.ReactNode,
 *   className?: string,
 *   hover?:     boolean,
 * } & React.HTMLAttributes<HTMLDivElement>} props
 */
export default function Card({ children, className = "", hover = false, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={
        hover
          ? { y: -4, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.14)" }
          : {}
      }
      className={`card ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
