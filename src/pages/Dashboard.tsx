import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Profile from "./Profile";

const tabs = ["Overview", "Clients", "Employees", "Profile"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6">Firm Dashboard</h2>
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Clients" && <Clients />}
        {activeTab === "Employees" && <Employees />}
        {activeTab === "Profile" && <Profile />}
      </main>
    </div>
  );
}






