import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //* here the state is one big obj it contains all variables
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "dumy",
      },
    };
    console.log("child constructor is called");
  }
  async componentDidMount() {
    console.log("child Componentdidmount is called");
    const userdata = await fetch("https://api.github.com/users/sainath-1999");
    const json = await userdata.json();

    this.setState({
      userInfo: json,
    });
    console.log("json", json);
  }

  componentDidUpdate() {
    console.log("component Did update");
  }

  componentWillUnmount() {
    console.log("Component Will unmount");
  }

  render() {
    console.log("child render is called");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="">
        <img src={avatar_url} className="w-3/12 m-auto" />
        <h3 className="p-4 text-center font-bold text-3xl">{name}</h3>
        <h4 className="p-4 text-center font-thin text-2xl">
          Current location:{location}
        </h4>
      </div>
    );
  }
}

export default UserClass;
