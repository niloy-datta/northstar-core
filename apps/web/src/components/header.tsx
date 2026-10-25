import type { ViewType } from "@/types/supplier";

interface HeaderProps {
  currentView: ViewType;
}

export function Header({ currentView }: HeaderProps) {
  const title = currentView === "dashboard" ? "Dashboard" : "Suppliers";

  return (
    <header className="topbar">
      <div className="breadcrumb">
        SHL Business System <span>/</span> <strong>{title}</strong>
      </div>
      <div className="topbar-end">
        <span className="topbar-tag">
          <span className="status-dot" /> Demo workspace
        </span>
        <div className="topbar-avatar">A</div>
      </div>
    </header>
  );
}
