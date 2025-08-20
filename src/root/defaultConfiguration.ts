import Man2Icon from '@mui/icons-material/Man2';
import WcIcon from '@mui/icons-material/Wc';
import Woman2Icon from '@mui/icons-material/Woman2';

export const defaultLogo = './logos/logo_atomic_crm.svg';

export const defaultTitle = 'Atomic CRM';

export type DealStageValue = typeof defaultDealStages[number]['value'];

export const defaultCompanySectors = [
    'Andover Forrest / Hills',
    'Hartland',
    'Chevy Chase / Downtown',
    'Hamburg',
    'Landsdowne',
    'Richmond',
    'Versailles',
    'Georgetown',
    'Beaumont & East Side',
];

export const defaultDealStages = [
    { value: 'opportunity',         label: 'Opportunity' },
    { value: 'pending-quote',       label: 'Pending Quote' },
    { value: 'quote-sent',          label: 'Quote Sent' },
    { value: 'pending-deposit',     label: 'Pending Deposit' },
    { value: 'deposit-paid',        label: 'Deposit Paid' },
    { value: 'lost',                label: 'Lost' },
    { value: 'pending-install',     label: 'Pending Install'},
    { value: 'install-complete',    label: 'Install Complete'}
];

export const defaultDealPipelineStatuses = [
    'closed'
];

export const defaultDealCategories = [
    'Residential',
    'Commercial',
    'Other'
];

export const defaultNoteStatuses = [
    { value: 'cold', label: 'Cold', color: '#7dbde8' },
    { value: 'warm', label: 'Warm', color: '#e8cb7d' },
    { value: 'hot', label: 'Hot', color: '#e88b7d' },
    { value: 'in-contract', label: 'In Contract', color: '#a4e87d' },
];

export const defaultTaskTypes = [
    'None',
    'Initial Contact',
    'Onsite Visit',
    'Send Quote',
    'Follow-up on Quote',
    'Purchase Material',
    'Prepare Material',
    'Notify Scheduled Install Date',
    'Complete Install',
    'Send Invoice',
    'Send Thank You + Review Request',
];

export const defaultContactGender = [
    { value: 'male', label: 'He/Him', icon: Man2Icon },
    { value: 'female', label: 'She/Her', icon: Woman2Icon },
    { value: 'nonbinary', label: 'They/Them', icon: WcIcon },
];

export const DEAL_STAGE_LABEL: Record<DealStageValue, string> =
  Object.fromEntries(defaultDealStages.map(s => [s.value, s.label])) as any;

export const DEAL_STAGE_ORDER: Record<DealStageValue, number> = {
  'opportunity': 10,
  'pending-quote': 20,
  'quote-sent': 30,
  'pending-deposit': 40,
  'deposit-paid': 50, 
  'pending-install': 60,
  'install-complete': 70,
  'lost': 80,
};