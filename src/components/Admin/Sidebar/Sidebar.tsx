import "./Sidebar.css";

import {
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Package,
  PlusCircle,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/admin/login");
  }

  return (

    <aside className="sidebar">
      <a className="sidebar__brand" href="/admin/dashboard">
        <span className="sidebar__brand-mark">S</span><span>Dicas da Sam</span>
      </a>
      <nav className="sidebar__nav" aria-label="Menu administrativo">
        <a className="sidebar__link sidebar__link--active" href="/admin/dashboard"><LayoutDashboard size={19} /><span>Dashboard</span></a>
        <a className="sidebar__link" href="/admin/products"><Package size={19} /><span>Produtos</span></a>
        <a className="sidebar__link" href="/admin/new-product"><PlusCircle size={19} /><span>Novo Produto</span></a>
        <a className="sidebar__link" href="/admin/categories"><FolderKanban size={19} /><span>Categorias</span></a>
        <a className="sidebar__link" href="#configuracoes"><Settings size={19} /><span>Configurações</span></a>
      </nav>
      <button className="sidebar__link sidebar__logout" type="button" onClick={handleLogout}><LogOut size={19} /><span>Sair</span></button>

    </aside>

  );

}
