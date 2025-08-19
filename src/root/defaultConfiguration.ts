import Man2Icon from '@mui/icons-material/Man2';
import WcIcon from '@mui/icons-material/Wc';
import Woman2Icon from '@mui/icons-material/Woman2';

export const defaultLogo = './logos/logo_atomic_crm.svg';

export const defaultTitle = 'Atomic CRM';

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
    { value: 'opportunity', label: 'Opportunity' },
    { value: 'pending-quote', label: 'Proposal Sent' },
    { value: 'quote-sent', label: 'In Negotiation' },
    { value: 'pending-deposit', label: 'Won' },
    { value: 'won', label: 'Lost' },
    { value: 'lost', label: 'Delayed' },
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
