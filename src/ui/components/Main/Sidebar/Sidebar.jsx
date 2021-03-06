import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import { Button, Divider, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Navigation } from './Navigation/Navigation';
import { routes } from '../../../config/routes';
import { formatNearBalance } from '../../../utils/format';
import { useStyles } from './Sidebar.styles';

export const Sidebar = () => {
  const balance = useStoreState((store) => store.general.user.balance);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.balance} color="textPrimary">
        {formatNearBalance(balance)}
      </Typography>
      <Link to={routes.createCampaign}>
        <Button variant="contained" color="primary" className={classes.createCampaign}>
          <Add className={classes.addIcon} />
          New Campaign
        </Button>
      </Link>
      <Divider className={classes.divider} />
      <Navigation />
    </div>
  );
};
