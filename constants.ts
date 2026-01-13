
import { Project, Invoice, Addon } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'AGN-9042',
    name: 'Neural Engine v4',
    client: 'Cyberdyne Systems',
    status: 'In Progress',
    health: 94,
    team: ['Sarah', 'John', 'Alex']
  },
  {
    id: 'AGN-8012',
    name: 'Logistics Optimizer',
    client: 'Global Freight Solutions',
    status: 'Testing',
    health: 82,
    team: ['Jane']
  },
  {
    id: 'AGN-7055',
    name: 'Cognitive Chatbot',
    client: 'Zenith Bank',
    status: 'Deployment',
    health: 100,
    team: ['Mike', 'Elena']
  }
];

export const MOCK_INVOICES: Invoice[] = [
  { id: 'INV-2023-005', dueDate: 'Nov 15, 2023', amount: 12500, status: 'Overdue', phase: 'Phase 3: LLM Optimization' },
  { id: 'INV-2023-004', dueDate: 'Oct 12, 2023', amount: 4500, status: 'Paid', phase: 'Phase 2: Agent Training' },
  { id: 'INV-2023-003', dueDate: 'Oct 05, 2023', amount: 23000, status: 'Pending', phase: 'Infrastructure Setup' }
];

export const MOCK_ADDONS: Addon[] = [
  { id: 'agent-cap', name: 'Extra AI Agent Capacity', price: 89, description: 'Increase concurrent tasks for automated agents.', enabled: true, category: 'Capacity' },
  { id: 'rag-storage', name: 'Additional RAG Knowledge Base', price: 45, description: 'Expanded storage for vector data and documents.', enabled: false, category: 'Capacity' },
  { id: 'priority-support', name: '24/7 Priority Support', price: 120, description: 'Dedicated account manager and 1-hour response SLA.', enabled: false, category: 'Service' },
  { id: 'api-limits', name: 'Extended API Rate Limits', price: 30, description: 'Increase requests per minute for high-frequency needs.', enabled: true, category: 'Service' }
];
