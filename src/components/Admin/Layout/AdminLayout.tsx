import "./AdminLayout.css";
import type { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
export default function AdminLayout({children}:{children:ReactNode}){return <div className="admin-shell"><Sidebar/><div className="admin-shell__content"><Topbar/><main className="admin-shell__main">{children}</main></div></div>;}
