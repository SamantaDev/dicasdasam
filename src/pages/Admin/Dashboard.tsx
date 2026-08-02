import "./Dashboard.css";
import { FolderKanban, MousePointerClick, Package, Star } from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";
import ProductTable from "../../components/Admin/ProductTable/ProductTable";
import StatCard from "../../components/Admin/StatCard/StatCard";

export default function Dashboard() {
  return <AdminLayout><section className="dashboard-page"><div className="dashboard-page__intro"><p>Painel administrativo</p><h2>Visão geral</h2><span>Acompanhe os principais números do seu conteúdo.</span></div><section className="dashboard-page__stats" aria-label="Estatísticas do painel"><StatCard label="Produtos" value="24" detail="+4 este mês" icon={<Package size={22}/>} tone="pink"/><StatCard label="Categorias" value="6" detail="Em organização" icon={<FolderKanban size={22}/>} tone="purple"/><StatCard label="Destaques" value="8" detail="Seleção atual" icon={<Star size={22}/>} tone="orange"/><StatCard label="Cliques" value="1.284" detail="+12% esta semana" icon={<MousePointerClick size={22}/>} tone="blue"/></section><ProductTable/></section></AdminLayout>;
}
