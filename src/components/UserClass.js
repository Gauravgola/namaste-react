import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name:"Dummy",
                location:"Default",
            },
        };
        console.log("child constructor");
    };

     async componentDidMount(){
        // console.log("child componentdid mount");
        const data = await  fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        console.log("Component Did Mount");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){

        const {name1,age,gender} = this.props;
        // const {count, count1} = this.state;

        // console.log("child render");

        const {name,location,avatar_url} = this.state.userInfo;
         
        return(
            <div className="user-card">
                {/* <h1>Count:{count}</h1>
                <button onClick={() => {

                    this.setState({
                        count:this.state.count + 1,
                    });
                Never update state variable directly (eg:- never ever use this.state.count something)

                }}>Count Increase</button>
                <h1>Count1:{count1}</h1>
                <button onClick={() => {
                    this .setState({
                        count1:this.state.count1 + 1,
                    });
                }}>Count Increase 1</button> */}
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Gender: {gender}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @golaoctober30</h4>
            </div>
        );
    };
};

export default UserClass;