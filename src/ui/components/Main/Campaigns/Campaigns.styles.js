import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '16px 72px auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  topbar: {
    gridArea: 'a',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #00000020',
  },
  noCampaigns: {
    gridArea: 'b',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'Campaigns' });
