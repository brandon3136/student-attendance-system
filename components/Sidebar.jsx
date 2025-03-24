import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-60 min-h-screen p-4">
      <ul className="space-y-4">
        <li><a href="#" className="block p-2 hover:bg-gray-300">Dashboard</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-300">Attendance</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-300">Students</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-300">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
