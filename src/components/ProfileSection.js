import React from "react";
import "../App.css";

const ProfileSection = () => {
  return (
    <div>
      <section className="first second">
        <div className="secImg">
          <img
            src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
          />
        </div>
        <div>
          <span>Create profiles for kids</span>
          <span>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </span>
        </div>
      </section>

      <div className="separation"></div>
    </div>
  );
};

export default ProfileSection;
