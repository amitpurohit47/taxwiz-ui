import { NavLink, Outlet } from "react-router-dom";

const SidebarLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-2xl font-bold mb-6">My App</h1>
        <nav className="flex flex-col gap-2">
          {[
            { to: "/", label: "Overview" },
            { to: "/profile", label: "Profile" },
            { to: "/employees", label: "Employees" },
            { to: "/clients", label: "Clients" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium ${
                  isActive ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
