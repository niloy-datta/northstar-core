export interface Supplier {
  id: string;
  name: string;
  category: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  status: "Active" | "Verified" | "Pending";
  rating: number;
}

export interface SummaryStats {
  activeSuppliers: number;
  openOrders: number;
  networkSpend: string;
}

export type ViewType = "dashboard" | "suppliers";
