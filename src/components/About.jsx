import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <UserClass name={"Azad Raj(class)"} />
      </div>
    );
  }
}

export default About;
