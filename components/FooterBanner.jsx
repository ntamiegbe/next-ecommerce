import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    saleTime,
    desc,
    smallText,
    midText,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <Link href="">
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
        <img src={urlFor(image)} className="footer-banner-image"/>
    </div>
  );
};

export default FooterBanner;
