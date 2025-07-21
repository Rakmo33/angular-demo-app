const demo = document.getElementById("demo");

function encodeHTML(str) {
    demo.innerText = str;
    return demo.innerHTML;
}
  
function decodeHTML(str) {
    demo.innerHTML = str;
    return demo.innerText;
}

// console.log(encodeHTML('<script>alert("XSS")</script>'));

  
// console.log(decodeHTML('<script>alert("XSS")</script>'));
console.log(decodeHTML("&lt;div&gt;Hi&lt;/div&gt;"));