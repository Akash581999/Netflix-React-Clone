import React from "react";
import "../App.css";

const MacSection = () => {
  return (
    <div>
      <section className="first third">
        <div>
          <span>Watch everywhere</span>
          <span>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </span>
        </div>

        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
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

export default MacSection;
