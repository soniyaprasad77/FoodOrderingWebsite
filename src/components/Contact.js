import React from 'react';

class Contact extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name + "inner child Contructor Called");
    }

    componentDidMount(){
        console.log(this.props.name + "inner child componentDidMOunt Called");
    }

    render( ){
        console.log(this.props.name + "inner child render Called");
        return (
            <>
            <h1> Contact Us</h1>
            <h2>{this.props.name}</h2>
            </>
        )
    }
    
}

export default Contact;