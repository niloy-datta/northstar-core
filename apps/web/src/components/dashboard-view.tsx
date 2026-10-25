import { Icon } from "./icons";
import type { SummaryStats, ViewType } from "@/types/supplier";

interface DashboardViewProps {
  stats: SummaryStats;
  onNavigate: (view: ViewType) => void;
}

export function DashboardView({ stats, onNavigate }: DashboardViewProps) {
  return (
    <div>
      <section className="welcome-hero">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="hero-kicker-line" /> SHL INTERNATIONAL · BUSINESS SYSTEM
          </p>
          <h1>
            Manage suppliers.<br />
            <span>Track orders.</span>
          </h1>
          <p className="hero-desc">
            Keep supplier details, orders, and daily work organized in one place.
          </p>
          <div className="hero-buttons">
            <button
              type="button"
              className="hero-button"
              onClick={() => onNavigate("suppliers")}
            >
              View Suppliers <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-head">
        <div>
          <p className="section-overline">DASHBOARD</p>
          <h2>Overview</h2>
        </div>
      </div>

      <div className="metric-grid-three">
        <article className="metric">
          <div className="metric-head">
            <span>Active Suppliers</span>
            <span className="metric-icon">
              <Icon name="building" size={20} />
            </span>
          </div>
          <strong>{stats.activeSuppliers}</strong>
          <div className="metric-footer">
            <span className="metric-foot-dot" /> Supplier contacts
          </div>
        </article>

        <article className="metric">
          <div className="metric-head">
            <span>Open Orders</span>
            <span className="metric-icon">
              <Icon name="package" size={20} />
            </span>
          </div>
          <strong>{stats.openOrders}</strong>
          <div className="metric-footer">
            <span className="metric-foot-dot" /> Orders being processed
          </div>
        </article>

        <article className="metric">
          <div className="metric-head">
            <span>Procurement Volume</span>
            <span className="metric-icon">
              <Icon name="chart" size={20} />
            </span>
          </div>
          <strong>{stats.networkSpend}</strong>
          <div className="metric-footer">
            <span className="metric-foot-dot" /> Sample order value
          </div>
        </article>
      </div>

      <div className="overview-columns">
        <section className="surface mix-panel">
          <div className="surface-top">
            <div>
              <p className="section-overline">SUPPLIER STATUS</p>
              <h2>Supplier performance</h2>
            </div>
            <span className="quiet-tag">STATUS</span>
          </div>

          <div className="composition-row">
            <div className="composition-symbol">
              <Icon name="building" size={20} />
            </div>
            <div className="composition-info">
              <div>
                <strong>Active &amp; Verified Suppliers</strong>
                <span>94%</span>
              </div>
              <div className="progress-track">
                <span style={{ width: "94%" }} />
              </div>
            </div>
          </div>

          <div className="composition-row">
            <div className="composition-symbol">
              <Icon name="check" size={20} />
            </div>
            <div className="composition-info">
              <div>
                <strong>On-Time Delivery Rate</strong>
                <span>98.2%</span>
              </div>
              <div className="progress-track">
                <span style={{ width: "98.2%" }} />
              </div>
            </div>
          </div>

          <p className="surface-note">
            A quick look at supplier status and delivery progress.
          </p>
        </section>

        <section className="surface quick-panel">
          <div className="surface-top">
            <div>
              <p className="section-overline">QUICK ACTIONS</p>
              <h2>Quick links</h2>
            </div>
          </div>

          <button
            type="button"
            className="quick-action"
            onClick={() => onNavigate("suppliers")}
          >
            <div className="quick-icon">
              <Icon name="building" />
            </div>
            <div>
              <strong>Supplier Directory</strong>
              <small>Find supplier contact details</small>
            </div>
            <Icon name="arrow" size={17} />
          </button>

          <div className="quick-action">
            <div className="quick-icon">
              <Icon name="package" />
            </div>
            <div>
              <strong>Procurement Orders</strong>
              <small>Review orders and delivery dates</small>
            </div>
            <Icon name="arrow" size={17} />
          </div>
        </section>
      </div>

      <div className="footnote">
        <Icon name="check" size={15} /> Demo only. All numbers shown here are sample data.
      </div>
    </div>
  );
}
