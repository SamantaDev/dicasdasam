import "./Sidebar.css";

import {
  LayoutDashboard,
  Package,
  Plane,
  UtensilsCrossed,
  Sparkles,
  Settings,
} from "lucide-react";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="sidebar-logo">

        <h2>Dicas da Sam</h2>

        <span>Painel Administrativo</span>

      </div>

      <nav>

        <a href="#">

          <LayoutDashboard size={20} />

          Dashboard

        </a>

        <a href="#">

          <Package size={20} />

          Produtos

        </a>

        <a href="#">

          <Plane size={20} />

          Viagens

        </a>

        <a href="#">

          <UtensilsCrossed size={20} />

          Gastronomia

        </a>

        <a href="#">

          <Sparkles size={20} />

          Lifestyle

        </a>

      </nav>

      <div className="sidebar-footer">

        <a href="#">

          <Settings size={20} />

          Configurações

        </a>

      </div>

    </aside>

  );

}