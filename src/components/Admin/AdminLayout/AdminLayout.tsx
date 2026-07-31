import "./AdminLayout.css";

import type { ReactNode } from "react";

import Sidebar from "../Sidebar/Sidebar";

interface Props {

  children: ReactNode;

}

export default function AdminLayout({

  children,

}: Props) {

  return (

    <div className="admin-layout">

      <Sidebar />

      <main className="admin-content">

        {children}

      </main>

    </div>

  );

}