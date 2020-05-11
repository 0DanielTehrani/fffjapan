import React from 'react';
import { useMediaQuery } from 'react-responsive';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

function Footer (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    isMobileOrTablet ?
    <FooterMobile />
    : <FooterDesktop />
  )
}

export default Footer;
