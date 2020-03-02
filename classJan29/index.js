console.log("js is running");

const fname = document.querySelector("#firstName");
const lname = document.querySelector("#lastName");
console.log (fname);
console.log (lname);

const submit = document.querySelector("#submit");
const submit2 = document.querySelector("#submit2");
const show = document.querySelector("#show");
const show2 = document.querySelector("#show2");

// submit.addEventListener('click',function(){
//     console.log("This button is working!")
// });

// fname.addEventListener('click', function(){
//     console.log("Input box is working!")
// });


function fn() {
    show.textContent = fname.value;
}
function fn2() {
    show2.textContent = lname.value;
}

submit.addEventListener("click", fn);
submit2.addEventListener("click", fn2);
// const

