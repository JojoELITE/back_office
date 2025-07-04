'use client'
import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">MaSanté<span className="plus">+</span></div>

      <nav className="menu">
        <a href="#">🏠 Dashboard</a>
        <a href="#">🩺 Docteurs</a>
        <a href="#">👥 Patients</a>
        <a href="#">📅 Urgent</a>
        <a href="#">💰 Paiement</a>
        <a href="#">⚙️ Paramètre</a>
      </nav>

      <div className="admin-section">
        <strong>Administrateur</strong>
        <p>administrateur@gmail.com</p>
      </div>
    </aside>
  )
}
