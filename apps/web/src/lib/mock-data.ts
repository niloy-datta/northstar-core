import { Supplier, SummaryStats } from "@/types/supplier";

export const initialStats: SummaryStats = {
  activeSuppliers: 48,
  openOrders: 16,
  networkSpend: "$1.24M"
};

export const mockSuppliers: Supplier[] = [
  {
    id: "sup-001",
    name: "Apex Industrial Components",
    category: "Machinery & Parts",
    contactPerson: "Sarah Jenkins",
    email: "s.jenkins@apex-industrial.com",
    phone: "+1 (555) 234-8901",
    country: "United States",
    status: "Active",
    rating: 4.9
  },
  {
    id: "sup-002",
    name: "Nordic Raw Materials AB",
    category: "Steel & Alloys",
    contactPerson: "Lars Lindqvist",
    email: "lars@nordicmaterials.se",
    phone: "+46 8 123 4567",
    country: "Sweden",
    status: "Verified",
    rating: 4.8
  },
  {
    id: "sup-003",
    name: "Pacific Cargo Logistics",
    category: "Freight & Transport",
    contactPerson: "Kenji Sato",
    email: "operations@pacificcargo.jp",
    phone: "+81 3 5555 0192",
    country: "Japan",
    status: "Active",
    rating: 4.7
  },
  {
    id: "sup-004",
    name: "Solis Petrochemicals Ltd",
    category: "Chemicals & Polymers",
    contactPerson: "Carlos Silva",
    email: "contact@solispetro.br",
    phone: "+55 11 9876 5432",
    country: "Brazil",
    status: "Active",
    rating: 4.6
  },
  {
    id: "sup-005",
    name: "Horizon Packaging Solutions",
    category: "Sustainable Packaging",
    contactPerson: "Elena Rostova",
    email: "info@horizonpack.de",
    phone: "+49 30 901820",
    country: "Germany",
    status: "Verified",
    rating: 4.9
  },
  {
    id: "sup-006",
    name: "Vertex Precision Tools",
    category: "Precision Engineering",
    contactPerson: "David Chen",
    email: "sales@vertextools.tw",
    phone: "+886 2 2345 6789",
    country: "Taiwan",
    status: "Active",
    rating: 4.8
  },
  {
    id: "sup-007",
    name: "Atlas Electronics Corp",
    category: "Semiconductors",
    contactPerson: "Michael Vance",
    email: "mvance@atlaselec.com",
    phone: "+1 (415) 890-1234",
    country: "United States",
    status: "Active",
    rating: 4.9
  },
  {
    id: "sup-008",
    name: "Orion Bulk Carriers",
    category: "Maritime Logistics",
    contactPerson: "Nikos Papadopoulos",
    email: "dispatch@orionmaritime.gr",
    phone: "+30 21 0345 6789",
    country: "Greece",
    status: "Verified",
    rating: 4.7
  },
  {
    id: "sup-009",
    name: "Zenith Thermal Systems",
    category: "HVAC & Energy",
    contactPerson: "Fiona Gallagher",
    email: "fiona@zeniththermal.uk",
    phone: "+44 20 7946 0912",
    country: "United Kingdom",
    status: "Pending",
    rating: 4.4
  },
  {
    id: "sup-010",
    name: "Meridian Agro Commodities",
    category: "Agricultural Feeds",
    contactPerson: "Ananya Sharma",
    email: "asharma@meridianagro.in",
    phone: "+91 22 6789 0123",
    country: "India",
    status: "Verified",
    rating: 4.8
  }
];
