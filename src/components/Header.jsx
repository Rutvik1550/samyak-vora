import React, { useState } from "react";
import Typical from "react-typical";

const Header = () => {
    const [ titles, setTitles ] = useState(["Marketing and Publicity Chairperson..."])
    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={titles} loop={50} />
    }, (props, prevProp) => true);

    return <header id="home" style={{ height: "100vh", display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={["Samyak Vora"]} wrapper="p" />
              </h1>
              <div className="title-container">
                <Typical steps={["Web-site under development, \n Final Roll out fall-2023..."]} wrapper="p" />
                {/* <HeaderTitleTypeAnimation /> */}
              </div>
              {/* <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              /> */}
            </div>
          </div>
        </div>
      </header>
}

export default Header;