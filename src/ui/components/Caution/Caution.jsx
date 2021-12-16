import { ErrorOutline } from '@material-ui/icons';
import { useStyles } from './Caution.styles';

export const Caution = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ErrorOutline className={classes.icon} />
      <span className={classes.caution}>CAUTION:</span>
      <span>
        This app will be <span className={classes.bold}>SHUT DOWN on January 10, 2022</span>. Please
        make sure you have exported your links. New app is available -{' '}
        <a href="https://app.neardrop.io" className={classes.link}>
          neardrop.io
        </a>
      </span>
    </div>
  );
};
