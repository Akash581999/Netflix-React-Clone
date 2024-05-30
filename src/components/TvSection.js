import React from "react";
import "../App.css";

const TvSection = () => {
  return (
    <div>
      <section className="first">
        <div>
          <span>Enjoy on your TV</span>
          <span>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>

        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoplay
            loop
            muted
          ></video>
        </div>
      </section>
      <div className="separation"></div>
    </div>
  );
};

export default TvSection;
