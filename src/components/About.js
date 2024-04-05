import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends React.Component{
    constructor(props) {
        super(props);
        // console.log("parent constructor");
    };

    componentDidMount(){
        // console.log("Parent componentdid mount");
    };


    render(){
        // console.log("parent render");
        return (
            <div>
                <h1>About class component</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-lg font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h1>About Us</h1>
                <h2>This is Namaste Web Series</h2>
                {/* <User name={"My Name is Gaurav"} age={"25"} gender={"Male"}/> */}

                <UserClass name={"My Name is Gola"} age={"30"} gender={"Male"} />
            </div>
        );
    };
};

export default About;