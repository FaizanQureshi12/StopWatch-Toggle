function toggleHide(e) {
    let imgElm = e.target;
    console.log("imgElm: ", imgElm);
    (imgElm.style.opacity === "0") ? imgElm.style.opacity = "1" : imgElm.style.opacity = "0"
}
// undo function: https://stackoverflow.com/questions/17150610/undo-redo-for-paint-program-using-canvas#:~:text=if%20you%20draw%20something%20else,printed%20after%20each%20mouse%20off.

let textFromDb =
    `Slow lorises are a group of several species of  strepsirrhine primates which make up the genus
     Nycticebus.  They have a round head, narrow snout, large eyes, and a variety of distinctive 
     coloration patterns that are species-dependent. The hands and feet of slow lorises have 
     several adaptations that give them a pincer-like grip and enable them to grasp branches for 
long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.`

function displayLess(e) {
    if (e) e.preventDefault();
    let shortPara = textFromDb.substring(0, 100);
    document.querySelector("#myPara").innerHTML =
        `${shortPara}... <a href="#" onclick="displayMore(event);">see more</a>`;
}
displayLess()

function displayMore(e) {
    e.preventDefault();
    document.querySelector("#myPara").innerHTML =
        `${textFromDb} <a href="#" onclick="displayLess(event);">see less</a>`;
}

// Stop Watch Script

// Link Of Famous Library of Stop watch
// https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/

let now = new Date();
console.log("now: ", now);

let today = new Date("2020-01-01 00:00:00");
let isPause = true;
console.log("today: ", today);

let setIntervalId =
    setInterval(() => {
        if (!isPause) {
            today.setMilliseconds(today.getMilliseconds() + 123)
        }
        document.querySelector("#stopwatch").innerText
            = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getMilliseconds()}`;
        document.querySelector("#stopwatch").innerText
        // = moment(today).format('HH:mm:ss:SSS');
    }, 123);

function pause() {
    isPause = !isPause;
}
function reset() {
    today = new Date("2020-01-01 00:00:00");
    isPause = true;
}
        // function stopInterval() {
        //     clearInterval(setIntervalId)
        // }