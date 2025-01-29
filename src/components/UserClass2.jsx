import React from "react";

class UserClass2 extends React.Component {
  constructor() {
    super();
    console.log("Constructor Method called from child class2");
  }

  componentDidMount() {
    console.log("Component did mount  called from child class2");
  }

  render() {
    return (
      <div>
        {console.log("Render Method called from child class2")}
        <h2>This is UserClass2</h2>
      </div>
    );
  }
}

export default UserClass2;
