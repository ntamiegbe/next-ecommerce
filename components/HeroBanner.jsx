import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h3 className="beats-solos">Nike Air Max</h3>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <p className="beats-solo">{heroBanner.largeText1}</p>
        <img
          src={urlFor(heroBanner.image)}
          alt="Sneakers"
          className="hero-banner-image"
        />
        <div>
          <Link href="/product/ID">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Discount</h5>
            <p>{heroBanner.discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
