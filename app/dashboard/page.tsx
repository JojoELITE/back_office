import Sidebar from "../components/Sidebar";
import "./dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        {/* Contenu principal du dashboard ici */}
      </main>
    </div>
  );
}
