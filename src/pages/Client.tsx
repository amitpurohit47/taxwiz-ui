function Clients() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Client List</h3>
      {/* List of Clients */}
      <ul className="mb-6">
        <li className="bg-white p-4 shadow-sm rounded mb-2">Client X</li>
        <li className="bg-white p-4 shadow-sm rounded mb-2">Client Y</li>
      </ul>
      <h3 className="text-xl font-semibold mb-4">Unverified Clients</h3>
      <ul>
        <li className="bg-yellow-100 p-4 shadow-sm rounded mb-2">Client Z</li>
      </ul>
    </div>
  );
}
export default Clients;