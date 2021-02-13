import React from "react";
import "./banner.css";
import BannerImage from '../../assets/images/banner_bg.jpg'

const Banner = () => (
  <div id="banner-container" class="jumbotron p-5">
    <img id="banner-image" src={BannerImage} alt="Banner Cover"/>
    <div id="banner-text" class="text-xl-start fs-2">
      Save the trees.
    </div>
  </div>
);

export default Banner;
