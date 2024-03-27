import { useEffect, useState } from "react";

const User = (props) => { 
    const [count,setCount] = useState(0);
    const [count1] = useState(1);                 //state Variable in functional component


    useEffect(() => {
        //API CAll
    }, []);

    

    return(
        <div className="user-card">
            <h1>Count0={count}</h1>
            <h1>Count1={count1}</h1>
            <h2>Name:{props.name} </h2>
            <h2>Age:{props.age} </h2>
            <h2>Gender:{props.gender} </h2>
            <h3>Location: New Delhi</h3>
            <h4>Contact: @golaoctober30</h4>
        </div>
    );
};

export default User;