import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:parent},"Namasteee React");
// console.log(heading);


//Namaste react using JSX


const jsxheading = (
<h1 id="heading" className="head">Namaste React Using jsx
</h1>
);


// console.log(jsxheading);


// React functional component
// const HeadingComponent = () =>{

//     return <h1 className="heading"> Namaste React Functional Component</h1>;

// };


// const HeadingComponent1 = () => (

//     <h1 className="container">
//         Namaste React functional component first
//     </h1>
    
// );


// this is component composition- rendering component inside a component
const HeadingComponent2 = () => (

    <div id="container-second">
        {jsxheading}
        <h1>Namaste React functional component</h1>
    </div>
    
);
const test1 = ReactDOM.createRoot(document.getElementById("root"));

// test1.render(heading);    // react element
test1.render(< HeadingComponent2 />); // react component-all the component rendered like this.