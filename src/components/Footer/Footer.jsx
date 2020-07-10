import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import styles from './Footer.module.css';

function Footer() {
  return (
    <Typography
      className={styles.copyright}
      variant='body2'
      color='textSecondary'
    >
      {'Copyright © '}
      <Link color='inherit' href='https://www.linkedin.com/in/salmanz18/'>
        Salman Zafar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;
