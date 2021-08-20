import { useStyles } from './WarningDownloadLinks.styles';

export const WarningDownloadLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.text}>
        <span>WARNING:</span> Links generated are only stored in the local storage.<br />
        If you will reset the local storage you will lose the links, so make sure to download all links into
        CSV as a backup as shown in this{' '}
        <a
          className={classes.link}
          href="https://www.notion.so/nearprotocol/Linkdrop-Guide-6f4a4eda45464daba39e349095df947f#9828dfb2112b49a6bcca2219f32662dd"
          target="_blank"
          rel="noreferrer"
        >
          link
        </a>
      </p>
    </div>
  );
};
