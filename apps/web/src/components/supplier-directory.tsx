import { useState } from "react";
import { Icon } from "./icons";
import type { Supplier } from "@/types/supplier";

interface SupplierDirectoryProps {
  suppliers: Supplier[];
}

export function SupplierDirectory({ suppliers }: SupplierDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const term = searchTerm.trim().toLowerCase();
  const filteredSuppliers = suppliers.filter((supplier) => {
    if (!term) return true;

    return (
      supplier.name.toLowerCase().includes(term) ||
      supplier.category.toLowerCase().includes(term) ||
      supplier.contactPerson.toLowerCase().includes(term) ||
      supplier.country.toLowerCase().includes(term) ||
      supplier.email.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <div className="page-heading">
        <div>
          <p className="section-overline">SUPPLIER DIRECTORY</p>
          <h1>
            Suppliers<span className="heading-period">.</span>
          </h1>
          <p className="muted">
            Find suppliers by name, category, contact, or country.
          </p>
        </div>
      </div>

      <div className="directory-stats">
        <div className="directory-icon">
          <Icon name="building" size={24} />
        </div>
        <div>
          <p className="section-overline">SUPPLIER COUNT</p>
          <strong>{suppliers.length} Registered Suppliers</strong>
        </div>
        <span className="directory-tip">Sample records</span>
      </div>

      <section className="surface directory-panel" aria-label="Suppliers directory">
        <div className="table-toolbar">
          <div>
            <h2>Supplier List</h2>
            <p className="muted">
              {filteredSuppliers.length} of {suppliers.length} suppliers displayed
            </p>
          </div>

          <div className="toolbar-actions">
            <div className="search-form">
              <Icon name="search" size={16} />
              <input
                type="text"
                aria-label="Search suppliers"
                placeholder="Search suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                  title="Clear search"
                >
                  <Icon name="close" size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>SUPPLIER NAME</th>
                <th>CATEGORY</th>
                <th>CONTACT PERSON</th>
                <th>CONTACT INFO</th>
                <th>COUNTRY</th>
                <th>STATUS</th>
                <th>RATING</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td>
                    <div className="person">
                      <span className="initial">
                        {supplier.name.charAt(0).toUpperCase()}
                      </span>
                      <strong>{supplier.name}</strong>
                    </div>
                  </td>
                  <td>
                    <span className="category-tag">{supplier.category}</span>
                  </td>
                  <td>{supplier.contactPerson}</td>
                  <td>
                    <a className="data-link" href={`mailto:${supplier.email}`}>
                      {supplier.email}
                    </a>
                    <br />
                    <span style={{ fontSize: "11px", color: "#8190a3" }}>
                      {supplier.phone}
                    </span>
                  </td>
                  <td>{supplier.country}</td>
                  <td>
                    <span
                      className={`status-pill status-${supplier.status.toLowerCase()}`}
                    >
                      {supplier.status === "Verified" && <Icon name="check" size={12} />}
                      {supplier.status}
                    </span>
                  </td>
                  <td>
                    <strong style={{ color: "#192d46" }}>★ {supplier.rating.toFixed(1)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredSuppliers.length === 0 && (
            <div className="empty">
              <div className="empty-illustration">
                <Icon name="building" size={28} />
              </div>
              <h3>No matching suppliers found</h3>
              <p>
                No results for &quot;{searchTerm}&quot;. Try a different search.
              </p>
              <button
                type="button"
                className="reset-button"
                onClick={() => setSearchTerm("")}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="footnote">
        <Icon name="check" size={15} /> Supplier details are sample data stored in this app.
      </div>
    </div>
  );
}
