import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
     constructor(props){
        super(props)
        console.log("Parent Contructor Called");
     }

     componentDidMount(){
        console.log("Parent ComponentDidMount is called")
    }
     render(){
        console.log("Parent Render Method is called");
        return (
            <>
            <h1>This is Our About Page </h1>
            <UserClass name="Soniya Prasad" location="Motihari"/>
            
            </>
        )
     }

}

export default About;