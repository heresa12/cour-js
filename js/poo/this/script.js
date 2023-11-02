"use strict";
console.log(this, this === window);
function test() {
    console.log(this);
}
test();
document.body.addEventListener("click", test);

document.body.addEventListener("click", function (event) {
    console.log(this, event.target);
});
document.body.addEventListener("click", (event) => {
    console.log(this, event.target);
});

const test2= test.bind({test:"Salut tout le monde !"});
test();
test2();

let article = document.createElement("article");
document.body.addEventListener("click",test.bind(article));
document.body.click();
