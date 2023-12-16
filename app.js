
// const heading = React.createElement(
// "h1",
// {id:"heading", class:"abc"},
// "Hello world using react!"
// );
// console.log(heading);
// const test = ReactDOM.createRoot(document.getElementById("root"));
// test.render(heading);

//****************************Above code is for simple code*********************************** */

/* <div id ="parent">
    <div id = "child">
        <h1>Hello Duniya</h1>
    </div>
   </div> */

// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"Hello Duniya!"))
// );
// console.log(parent);
// const test = ReactDOM.createRoot(document.getElementById("root"));
// test.render(parent);

//************************************8*********************************************************/
/* <div id ="parent">
    <div id = "child">
        <h1>Namaste Duniya!</h1>
        <h2>Namaste Duniya!</h2>
    </div>
</div> */

// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// [
//  React.createElement("h1",{},"Hello Duniya!"),
//  React.createElement("h2",{},"Hello Duniya!")
// ]
// )
// );
// console.log(parent);
// const test = ReactDOM.createRoot(document.getElementById("root"));
// test.render(parent);


//******************************************************************************************** */

/* <div id ="parent">
    <div id = "child">
        <h1>Namaste Duniya!</h1>
        <h2>Namaste Duniya!</h2>
    </div>
    <div id = "child2">
        <h1>Namaste Duniya!</h1>
        <h2>Namaste Duniya!</h2>
    </div>
</div> */


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[
 React.createElement("h1",{},"Hello Duniya!"),
 React.createElement("h2",{},"Hello Duniya!")
]
),React.createElement("div",{id:"child2"},
[
 React.createElement("h1",{},"Hello Duniya!"),
 React.createElement("h2",{},"Hello Duniya!")
]
)]
);
console.log(parent);
const test = ReactDOM.createRoot(document.getElementById("root"));

