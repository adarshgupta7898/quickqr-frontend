import { NavLink } from "react-router-dom";
import { HiHome, HiSparkles, HiClock } from "react-icons/hi2";
import { MdQrCode2 } from "react-icons/md";

const links = [
  { to: "/",         label: "Home",     Icon: HiHome     },
  { to: "/generate", label: "Generate", Icon: HiSparkles },
  { to: "/history",  label: "History",  Icon: HiClock    },
];

/**
 * Optional sidebar for wider layouts.
 */
export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 bg-white border-r border-slate-100 min-h-screen pt-8 px-3 gap-1">
      <div className="flex items-center gap-2 px-3 mb-6 font-extrabold text-lg text-indigo-600">
        <MdQrCode2 className="text-2xl" />
        QuickQR
      </div>
      {links.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
            }`
          }
        >
          <Icon className="text-base shrink-0" />
          {label}
        </NavLink>
      ))}
    </aside>
  );
}
