import React, { memo } from 'react';

import Styles from './footer-styles.module.scss';

const Footer: React.FC = () => {
  return <footer className={Styles.footer} />;
};

export default memo(Footer);
