import React from "react";
import AboutMainDiv, {
  CardDiv,
  AboutLi,
  AboutUl,
  AboutA,
  AboutButton,
} from "./style";

const About = () => {
  return (
    <AboutMainDiv>
      {/* <div className="container"> */}
      <div className="row d-flex justify-content-center ">
        <div className="col-md-7 mt-5">
          <CardDiv className="card p-3 py-4">
            <div className="text-center">
              <img
                src="https://avatars.githubusercontent.com/u/132518854?s=400&u=0efc72b62c05db69764f95edf879a00501263527&v=4"
                width={100}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="mt-2 mb-0">Cihan Bagriyanik</h5>
              <span>Fullstack Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  voluptatem dolore sint quo assumenda eum voluptate aut, sequi
                  rem cumque facilis asperiores possimus porro, facere eveniet!
                  Tempora non cupiditate in quis adipisci. Distinctio, deleniti
                  dolores?
                </p>
              </div>
              <AboutUl className="social-list">
                <AboutLi>
                  <AboutA className="fa-brands fa-facebook" />
                </AboutLi>
                <AboutLi>
                  <AboutA className="fa-brands fa-github" />
                </AboutLi>
                <AboutLi>
                  <AboutA className="fa-brands fa-instagram" />
                </AboutLi>
                <AboutLi>
                  <AboutA className="fa-brands fa-linkedin" />
                </AboutLi>
                <AboutLi>
                  <AboutA className="fa-regular fa-envelope" />
                </AboutLi>
              </AboutUl>
              <div>
                <AboutButton>
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.linkedin.com/in/bagriyanik/"
                    target="true"
                  >
                    Message
                  </a>
                </AboutButton>
                <AboutButton>
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/cihanbagriyanik"
                    target="true"
                  >
                    Contact
                  </a>
                </AboutButton>
              </div>
            </div>
          </CardDiv>
        </div>
      </div>
      {/* </div> */}
    </AboutMainDiv>
  );
};

export default About;
