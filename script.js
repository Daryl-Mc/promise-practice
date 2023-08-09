let green = true
let blue = false
let red = false 
const output = document.querySelector("#output");

function colorSwitcher(textContent, background, color){
    const switchBtn = document.querySelector("#switch");
    return new Promise ((resolve, reject) => {
        output.style.background = background;
        switchBtn.textContent = textContent;
        resolve(`switched to ${color}`)
    })
}


function switcher(){
    if(green){
        colorSwitcher("Blue", "blue", "Blue");
        // .then((message) => {
        //     console.log(message)
        // }).catch((error) => {
        //     console.log(error)
        // })
        green = false;
        blue = true;
    } else if (blue){
        blue = false; 
        red = true;
        colorSwitcher("Red", "red", "Red" );
        // .then(() => {
        //     console.log(message);
        // }) .catch ((error) => {
        //     console.log(error);
        // })
    } else{
        green = true; 
        red = false;
        colorSwitcher("Green", "green", "Green");
        // .then((message) => () {
        //     console.log(message)
        // }) .catch((error) => {
        //     console.log(error)
        // })
    }
    return new Promise ((resolve, reject) =>{
        if (blue){
            resolve("blue");
        }if (red){
            reject("red")
        }if (green){
            resolve("green")
        }
    }).then((message) => {
        console.log("The button is " + message);
    }).catch((message) => {
        console.log("Oh no its " + message)
    })
}
