import React from "react";
import "../App.css";

const PhoneSection = () => {
  return (
    <div>
      <section className="first second">
        <div className="secImg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>
        <div>
          <span>Download your shows to watch offline</span>
          <span>
            Save your favourites easily and always have something to watch.
          </span>
        </div>
      </section>
      <div className="separation"></div>
    </div>
  );
};

export default PhoneSection;
