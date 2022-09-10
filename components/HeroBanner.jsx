import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <h3>Mid Text</h3>
        <img src="" alt="Sneakers" className="hero-banner-image" />

        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              recusandae sint odit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
