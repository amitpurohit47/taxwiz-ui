import { NavLink, Outlet } from "react-router-dom";

const SidebarLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 p-4">
        <h1 className="text-2xl font-bold mb-6">Taxwiz</h1>
        <nav className="flex flex-col gap-2">
          {[
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
                  isActive ? "bg-blue-200 text-blue-600" : "text-gray-600 hover:bg-blue-200"
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
