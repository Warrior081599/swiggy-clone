import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.name = name;

    this.state = {
      userInfo: {
        name: "",
        bio: "",
        location: "",
      },
    };

    console.log("Constructor method of the child called");
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/Warrior081599");
    const jsonData = await response.json();

    this.setState({
      userInfo: jsonData,
    });

    this.timer = setInterval(() => {
      console.log("hello from setInterval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDid update is called from Child class component");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount called from child");
  }

  render() {
    console.log("Child render method called");
    const { name, bio, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <p>{bio}</p>
        <p>{location}</p>
      </div>
    );
  }
}

export default UserClass;
