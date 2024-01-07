import React from 'react';
import Contact from './Contact'
class UserClass extends React.Component{

    constructor(props){
       
        super(props);
        console.log(this.props.name + "child Contructor Called");
        this.state={
            count:0,
        }
    }
    componentDidMount(){
        console.log(this.props.name + "Child ComponentDidMount is called")
    }

    render(){
        console.log(this.props.name + "Child Render Called");
        return(
            <>
            <div className="about-card">
                <h1>Count: {this.state.count}</h1>
                <button
                 onClick={()=>{
                    this.setState({ 
                    count : this.state.count + 1
                 }
                 )
                 }}
                >Increase Count
                </button>
            <h1>Name: {this.props.name}</h1>
            <h2>Location: {this.props.location}</h2>
            <Contact name=" Soniya"/>
            </div>
            </>
        )
    }
}

export default UserClass;