import React from "react";

type AdminInfo = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  firmId: string;
  gstNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  permissions: string[];
};

const adminData: AdminInfo = {
  name: "Alex Johnson",
  role: "Administrator",
  location: "San Francisco, USA",
  email: "alex.johnson@examplefirm.com",
  phone: "+1 (555) 123-4567",
  firmId: "FIRM12345",
  gstNumber: "GSTIN098765",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    postalCode: "94105",
    country: "USA",
  },
  permissions: ["Manage Users", "View Reports", "Edit Settings", "Access System Logs"],
};

const Profile: React.FC = () => {
  const { name, role, location, email, phone, firmId, gstNumber, address, permissions } = adminData;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="mt-2">
          <span className="text-xs text-purple-700 font-medium bg-purple-100 px-2 py-1 rounded-md">
            Profile Completeness: 85%
          </span>
        </div>
      </div>

      <div className="space-y-10 border-t border-gray-200 pt-6">
        {/* Section: Personal Information */}
        <Section title="Personal Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoRow label="Full Name" value={name} />
            <InfoRow label="Role" value={role} />
          </div>
        </Section>

        {/* Section: Address */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <InfoRow label="Street Address" value={address.street} />
            <InfoRow label="City" value={address.city} />
            <InfoRow label="State" value={address.state} />
            <InfoRow label="Postal Code" value={address.postalCode} />
            <InfoRow label="Country" value={address.country} />
          </div>
        </Section>

        {/* Section: Contact Information */}
        <Section title="Contact Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoRow label="Email" value={email} />
            <InfoRow label="Phone Number" value={phone} />
          </div>
        </Section>

        {/* Section: Company/Firm Details */}
        <Section title="Company/Firm Details">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoRow label="Firm ID" value={firmId} />
            <InfoRow label="GST Number" value={gstNumber} />
          </div>
        </Section>

        {/* Section: Role & Permissions */}
        <Section title="Role & Permissions">
          <InfoRow label="Assigned Role" value={role} />
          <div className="mt-2">
            <p className="font-medium text-sm mb-1">Permissions</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {permissions.map((perm, i) => (
                <li key={i}>{perm}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Section: Account Actions */}
        <Section title="Account Actions">
          <div className="space-x-4">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
              Change Username
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-200 text-sm font-medium hover:bg-gray-300">
              Change Password
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
    <div className="border border-gray-200 rounded-md p-4">{children}</div>
  </div>
);

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium text-gray-800">{value}</p>
  </div>
);

export default Profile;
