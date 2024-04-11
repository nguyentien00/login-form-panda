let username = document.getElementById("username");
let password = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
    eyeL.style.cssText = `
    left: 0.6em;
    top: 0.6em; 
    `;
    eyeR.style.cssText = `
    left: 0.6em;
    top: 0.6em; 
    `;

};

let normalHandStyle = () => {
    handL.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    left: 7.5em;
    transform: rotate(0deg);
    `;

    handR.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg);
    `;
};

username.addEventListener("focus", () => {
    eyeL.style.cssText = `
    left: 0.75em;
    top:1.12em;
    `;

    eyeR.style.cssText = `
    left: 0.75em;
    top:1.12em;
    `;
    normalHandStyle();
});

document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem != username && clickedElem != password) {
        normalEyeStyle();
        normalHandStyle();
    }
});


password.addEventListener("focus", () => {
    handL.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    left: 11.7em;
    transform: rotate(-155deg);
    `;

    handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.7em;
    transform: rotate(155deg);
    `;

    normalEyeStyle();
});