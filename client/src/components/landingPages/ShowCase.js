import React from 'react';
import banner from '../images/bkclothing-banner.png';
import bannerImg from '../images/banner-img.jpg';
import { Button } from '@material-ui/core';
import '../css/Showcase.css';
function ShowCase() {
  return (
    <div className="showcase">
      <div className="container">
        <div className="banner">
          <div className="banner__content">
            <h1>bkclothing deals</h1>
            <p>free shipping on all online orders!</p>
          </div>
          <img src={bannerImg} alt="banner" />
        </div>
        <div className="content__wrapper">
          <div className="content">
            <div className="title">
              <h2>Fashion sale</h2>
            </div>
            <div className="body">
              <h3>minimal menz style</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
                provident.
              </p>
              <Button>Show now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
