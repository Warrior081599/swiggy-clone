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
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/Warrior081599");
    const jsonData = await response.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    const { name, bio, location, avatar_url } = this.state.userInfo;
    return (
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
        />
        <h2 className="text-xl font-bold mt-4">{name}</h2>
        <p className="text-gray-600 mt-2">{bio}</p>
        <p className="text-gray-500 mt-2">{location}</p>
      </div>
    );
  }
}

export default UserClass;
