
export enum View {
  HOME = 'home',
  SOLUTIONS = 'solutions',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact',
  PORTAL_DASHBOARD = 'portal-dashboard',
  PORTAL_SUBSCRIPTION = 'portal-subscription',
  PORTAL_BILLING = 'portal-billing',
  PORTAL_ADDONS = 'portal-addons',
  PORTAL_USAGE = 'portal-usage',
  PORTAL_PROJECT_DETAIL = 'portal-project-detail',
  PORTAL_MILESTONES = 'portal-milestones',
  PORTAL_PAYMENT_METHOD = 'portal-payment-method',
  PORTAL_INVOICE_DETAIL = 'portal-invoice-detail'
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'In Progress' | 'Testing' | 'Deployment' | 'Active';
  health: number;
  team: string[];
}

export interface Invoice {
  id: string;
  dueDate: string;
  amount: number;
  status: 'Paid' | 'Overdue' | 'Pending';
  phase: string;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
  enabled: boolean;
  category: 'Capacity' | 'Service';
}
