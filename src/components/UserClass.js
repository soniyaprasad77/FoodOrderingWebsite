import React from "react";
import Contact from "./Contact";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "child Contructor Called");
    this.state = {
      userInfo: {
        name: "soni",
        location: "here dummy",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount is called")

    const userdata = await fetch("https://api.github.com/users/soniyaprasad77");
    const json = await userdata.json();
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("it is unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log(this.props.name + "Child Render Called");
    return (
      <>
        <div className="about-card">
          <h1 className="flex justify-center font-serif font-bold m-6">
            Name: {name}
          </h1>
          <h2 className="flex justify-center font-serif font-bold m-6">
            Location: {location}
          </h2>
          <img src={avatar_url} />
        </div>
      </>
    );
  }
}

export default UserClass;
