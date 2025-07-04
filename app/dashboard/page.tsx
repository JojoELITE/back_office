'use client';

import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaUserMd, FaUserInjured, FaCalendarAlt, FaMoneyBill, FaCog } from "react-icons/fa";

const data = [
  { month: "Jan", actif: 4000, inactif: 2400 },
  { month: "Feb", actif: 8000, inactif: 1600 },
  { month: "Mar", actif: 6000, inactif: 2000 },
  { month: "Apr", actif: 7000, inactif: 1200 },
  { month: "May", actif: 7500, inactif: 1400 },
  { month: "Jun", actif: 6800, inactif: 1800 },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between p-4">
        <div>
          <h1 className="text-xl font-bold mb-8">MaSanté<span className="text-red-500">+</span></h1>
          <ul className="space-y-4">
            <li className="font-semibold bg-white text-blue-600 p-2 rounded flex items-center gap-2">🏠 Dashboard</li>
            <li className="flex items-center gap-2"><FaUserMd /> Docteurs</li>
            <li className="flex items-center gap-2"><FaUserInjured /> Patients</li>
            <li className="flex items-center gap-2"><FaCalendarAlt /> Urgent</li>
            <li className="flex items-center gap-2"><FaMoneyBill /> Paiement</li>
            <li className="flex items-center gap-2"><FaCog /> Parametre</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Administrateur</p>
          <p className="text-gray-200">administrateur@gmail.com</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="🔍 Rechercher..."
            className="px-4 py-2 border rounded-md w-1/3"
          />
          <div className="flex gap-4 items-center">
            <span className="bg-white rounded-full p-2 shadow">💬</span>
            <span className="bg-white rounded-full p-2 shadow">🔔</span>
            <img
              src="/profile.jpg"
              alt="profil"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <p className="text-sm text-gray-500">Total Patients</p>
            <p className="text-2xl font-bold">2K+</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <p className="text-sm text-gray-500">Total Docteurs</p>
            <p className="text-2xl font-bold">600</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <p className="text-sm text-gray-500">Urgent</p>
            <p className="text-2xl font-bold">800</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow text-center">
            <p className="text-sm text-gray-500">Revenus</p>
            <p className="text-2xl font-bold">XAF 60K</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg p-6 shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Patients Statut</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="actif" stroke="#4f46e5" fill="#c7d2fe" />
              <Area type="monotone" dataKey="inactif" stroke="#dc2626" fill="#fecaca" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Docteurs */}
        <h2 className="text-lg font-semibold mb-4">Top Docteurs</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-2 shadow text-center">
              <img
                src={`/doctor${i + 1}.jpg`}
                className="rounded-lg h-28 w-full object-cover mb-2"
                alt={`Docteur ${i + 1}`}
              />
              <p className="font-medium">Dr Nom {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
