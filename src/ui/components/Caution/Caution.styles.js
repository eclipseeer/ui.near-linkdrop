import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100vw',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e53935',
    color: '#ffffff',
    fontSize: 12,
  },
  icon: {
    fontSize: 20,
  },
  caution: {
    fontWeight: 700,
    letterSpacing: 0.5,
    margin: '0 8px 0 4px',
  },
  bold: {
    fontWeight: 700,
  },
  link: {
    textDecoration: 'underline',
  },
};

export const useStyles = makeStyles(styles, { name: 'Caution' });
