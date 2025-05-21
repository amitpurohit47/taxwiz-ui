export default function Overview() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Latest Clients</h3>
      <ul className="mb-6">
        {/* Placeholder for latest clients */}
        <li className="bg-white p-4 shadow-sm rounded mb-2">Client A</li>
        <li className="bg-white p-4 shadow-sm rounded mb-2">Client B</li>
      </ul>
      <h3 className="text-xl font-semibold mb-4">Employees</h3>
      <table className="min-w-full bg-white shadow-sm rounded">
        <thead>
          <tr className="text-left border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">John Doe</td>
            <td className="p-2">Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}