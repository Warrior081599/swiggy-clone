import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();

    console.log("Constructor Methood of Parent Called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
  }

  render() {
    console.log("Parent Render method called");
    return (
      <div>
        <h1>About</h1>
        {/* <p>This is about page</p> */}

        <UserClass name={"Azad Raj(class)"} />
      </div>
    );
  }
}

export default About;
