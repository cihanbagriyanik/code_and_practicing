import React from "react";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import ButonSSS, { DetayButon } from "./styles/ButonSSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png" />
        <div>
          <ButonSSS hasan="#a62440">Apply Courses</ButonSSS>
          <ButonSSS omer>Talk to Adviser</ButonSSS>
        </div>
      </DisplaySSS>
      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            05 Clarusway is a leading international software Bootcamp. Join a
            micro class online with other trainees and learn coding skills with
            a highly-skilled instructor.
          </p>
          <ButonSSS omer>Start Your New Career</ButonSSS>
          <DetayButon>Details</DetayButon>
        </div>
        <ImageSSS src="./images/hero.jpg" />
      </DisplaySSS>
    </div>
  );
};

export default Header;
