const btn = document.getElementById("btn");
const title = document.getElementById("title");

function hello () {
    console.log("Hello");
    title.innerText = "Hello";
}
btn.addEventListener("click", hello);

const input = document.getElementById("input");
console.log(input)
input.addEventListener("input", (e) => {
    console.log(e.target.value);
    title.innerText = e.target.value;


});
const prompt = document.getElementById("prompt");

generate.addEventListener("click" , () => {
    const imgSrc = "https://image.pollinations.ai/prompt/" + prompt.value;
    Image.src = imgSrc;
})