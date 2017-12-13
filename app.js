let num = 0
if (localStorage.getItem("1") !== undefined) {
  const addMessage = () => {
    for (let i = localStorage.length; i > 0; i--) {
      let iAsString = i.toString();
      let node = document.createElement("DIV")
      let textnode = document.createTextNode(localStorage.getItem(iAsString))
      node.className = "messages";
      node.id = iAsString;
      node.appendChild(textnode)
      document.getElementById("messages").appendChild(node);
      num++;
    }
  }
  addMessage();
  document.getElementById("number-of-posts").innerHTML = "Number of Posts: " + num;
}

document.getElementById("post").addEventListener("click", (event) => {
  let post = document.getElementById("input-form").value;
  num = (num + 1).toString();
  localStorage.setItem(num, post);
});

const messages = document.getElementsByClassName("messages");
for (let i = 0; i < messages.length; i++) {
  messages[i].addEventListener('click', (event) => {
    messages[i].parentNode.removeChild(messages[i]);
    num--;
    document.getElementById("number-of-posts").innerHTML = "Number of Posts: " + num;
  });
}



// const addMessage = () => {
//   for (let key in localStorage) {
//     let node = document.createElement("DIV")
//     var textnode = document.createTextNode(localStorage.getItem(key))
//     node.className = "messages";
//     node.appendChild(textnode)
//     document.getElementById("messages").appendChild(node);
//     num++;
//   }
// }
