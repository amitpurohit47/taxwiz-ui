function Employees() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Employee List</h3>
      {/* List of Employees */}
      <ul className="mb-6">
        <li className="bg-white p-4 shadow-sm rounded mb-2">Alice - Staff</li>
        <li className="bg-white p-4 shadow-sm rounded mb-2">Bob - Manager</li>
      </ul>
      <h3 className="text-xl font-semibold mb-4">Unverified Employees</h3>
      <ul>
        <li className="bg-yellow-100 p-4 shadow-sm rounded mb-2">Charlie - Pending</li>
      </ul>
    </div>
  );
}

export default Employees;