import { Campaign } from '../../../general/icons/Campaign';
import { routes } from '../../../../config/routes';

const items = [
  {
    name: 'Campaigns',
    to: routes.campaigns,
    activeFor: [routes.campaigns, routes.campaign, routes.createCampaign],
    icon: Campaign,
  },
];

export const getItems = (match) =>
  items.map(({ name, to, icon, activeFor }) => ({
    name,
    icon,
    to,
    isActive: activeFor.includes(match.path),
  }));
