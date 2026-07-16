import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdQrCode2, MdMenu, MdClose } from "react-icons/md";
import { HiHome, HiSparkles, HiClock } from "react-icons/hi2";

const NAV_LINKS = [
  { to: "/",         label: "Home",     Icon: HiHome     },
  { to: "/generate", label: "Generate", Icon: HiSparkles },
  { to: "/history",  label: "History",  Icon: HiClock    },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
     transition-all duration-200 ${
       isActive
         ? "bg-blue-50 text-blue-600"
         : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
     }`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md
                        border-b border-slate-100 shadow-sm">
      <div className="container-app">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-extrabold text-xl
                       text-blue-600 hover:text-blue-700 transition-colors"
          >
            <MdQrCode2 className="text-2xl" />
            QuickQR
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label, Icon }) => (
              <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
                <Icon className="text-base" />
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-600
                       hover:bg-slate-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open
              ? <MdClose   className="text-2xl" />
              : <MdMenu    className="text-2xl" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0      }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <nav className="container-app flex flex-col gap-1 py-3">
              {NAV_LINKS.map(({ to, label, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="text-base" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
