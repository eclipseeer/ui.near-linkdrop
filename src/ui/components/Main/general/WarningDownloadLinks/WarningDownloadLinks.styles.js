import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#ef6c00',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    color: 'white',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.25px',
    textAlign: 'center',
  },
  link: {
    color: '#5870ff'
  }
};

export const useStyles = makeStyles(styles, { name: 'WarningDownloadLinks' });
