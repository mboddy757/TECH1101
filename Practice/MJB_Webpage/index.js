console.log("js running");

function getDate(){
    const yearThing = document.querySelector("#copyYear");
    const today = new Date();
    yearThing.textContent = today.getFullYear();
    return;
}
getDate();

