"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { DashboardView } from "@/components/dashboard-view";
import { SupplierDirectory } from "@/components/supplier-directory";
import { mockSuppliers, initialStats } from "@/lib/mock-data";
import type { ViewType } from "@/types/supplier";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");

  return (
    <div className="shell">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      <main className="main-area">
        <Header currentView={currentView} />

        <div className="content">
          {currentView === "dashboard" ? (
            <DashboardView stats={initialStats} onNavigate={setCurrentView} />
          ) : (
            <SupplierDirectory suppliers={mockSuppliers} />
          )}
        </div>
      </main>
    </div>
  );
}
