import { Icon } from "./icons";
import type { ViewType } from "@/types/supplier";

interface SidebarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Main sidebar">
      <div className="brand-row">
        <div className="brand-emblem" aria-hidden="true">
          S
        </div>
        <div>
          <div className="brand-mark">
            SHL<span>.</span>
          </div>
          <div className="brand-description">INTERNATIONAL</div>
        </div>
      </div>

      <div className="workspace-pill">
        <span className="pill-dot" /> OPERATIONS <span className="pill-separator">/</span> INTERNAL
      </div>

      <nav aria-label="Primary navigation">
        <p className="nav-heading">WORKSPACE</p>

        <button
          type="button"
          aria-current={currentView === "dashboard" ? "page" : undefined}
          className={`nav-item ${currentView === "dashboard" ? "selected" : ""}`}
          onClick={() => onNavigate("dashboard")}
        >
          <Icon name="grid" />
          <span>Dashboard</span>
          {currentView === "dashboard" && <span className="active-indicator" />}
        </button>

        <button
          type="button"
          aria-current={currentView === "suppliers" ? "page" : undefined}
          className={`nav-item ${currentView === "suppliers" ? "selected" : ""}`}
          onClick={() => onNavigate("suppliers")}
        >
          <Icon name="building" />
          <span>Suppliers</span>
          {currentView === "suppliers" && <span className="active-indicator" />}
        </button>
      </nav>

      <div className="sidebar-bottom">
        <div className="side-status">
          <Icon name="lock" size={15} />
          <span>Internal workspace</span>
        </div>
        <div className="account-row">
          <div className="user-avatar">A</div>
          <div className="account-info">
            <strong>Administrator</strong>
            <small>SHL operations</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
