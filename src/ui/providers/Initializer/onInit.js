import { redirectToStartPage } from './redirectToStartPage';

export const onInit = async (store, history, setInit) => {
  await store.persist.resolveRehydration();
  const actions = store.getActions();

  await actions.general.onInitNear();
  await actions.general.onHandleWalletRedirect(history);
  redirectToStartPage(history, store);
  await actions.general.onLoadDataBeforeFirstRender(history);
  setInit(true);
};
