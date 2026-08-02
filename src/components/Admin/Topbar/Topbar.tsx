import "./Topbar.css";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return <header className="topbar"><h1>Bom dia, Sam <span aria-hidden="true">👋</span></h1><div className="topbar__actions"><label className="topbar__search"><Search size={18} aria-hidden="true" /><input type="search" placeholder="Buscar produtos..." aria-label="Pesquisar produtos" /></label><button className="topbar__notification" type="button" aria-label="Notificações"><Bell size={19} /><span /></button><div className="topbar__avatar" aria-label="Perfil de Sam">SS</div></div></header>;
}
