import { thunk } from 'easy-peasy';
import { routes } from '../../../ui/config/routes';

// Temporary disabled and unused
export const onDisconnect = thunk((_, payload, { getStoreActions }) => {
  const { history } = payload;
  const actions = getStoreActions();
  const resetState = actions.resetState;
  const onInitNear = actions.general.onInitNear;

  resetState();
  localStorage.clear();
  history.push(routes.connectWallet);
  onInitNear();
});
