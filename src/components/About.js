import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Contructor Called");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount is called");
  }
  render() {
    console.log("Parent Render Method is called");
    return (
      <div className="userCalss-about flex justify-center">
        {/* <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold py-4">{loggedInUser}</h1>
          )}
        </UserContext.Consumer> */}
        <UserClass name="Soniya Prasad" location="Motihari" />
      </div>
    );
  }
}

export default About;
