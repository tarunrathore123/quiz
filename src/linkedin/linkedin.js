import React from "react";
import "./linkedin.scss";
// import HomeIcon from "@material-ui/icons/Home.js";
import HomeIcon from "@material-ui/icons/Home";

const Linkedin = () => {
  return (
    <div className="linkedin">
      <div className="header">
        <div className="header__left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="logo"
          />
          <input type="Search" />
        </div>
        <div className="header__right">
          <div className="iconWithText">
            <img src={HomeIcon} alt="Homeicon" />
            <h3>Home</h3>
          </div>
          <div className="iconWithText">
            {/* <img src={HomeIcon} alt="Homeicon" /> */}
            <h3>My Networks</h3>
          </div>
          <div className="iconWithText">
            {/* <img src={HomeIcon} alt="Homeicon" /> */}
            <h3>jobs</h3>
          </div>
          <div className="iconWithText">
            {/* <img src={HomeIcon} alt="Homeicon" /> */}
            <h3>Messaging</h3>
          </div>
          <div className="iconWithText">
            {/* <img src={HomeIcon} alt="Homeicon" /> */}
            <h3>Notifications</h3>
          </div>
          <div className="iconWithText">
            {/* <img src={HomeIcon} alt="Homeicon" /> */}
            <h3>Me</h3>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__left">
          <img
            src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
            alt="cover pics"
          />
        </div>
      </div>
    </div>
  );
};

export default Linkedin;
