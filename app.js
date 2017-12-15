let num = 0;

if (localStorage.getItem("1") !== null) {
  const addMessage = () => {
    for (let key in localStorage) {
      if (localStorage.getItem(key) !== null) {
        let node = document.createElement("ARTICLE");
        let textnode = document.createTextNode(localStorage.getItem(key));
        node.className = "messages";
        node.id = key;
        node.appendChild(textnode)
        if (num === 0) {
          document.getElementById("messages").appendChild(node);
        } else {
          document.getElementById("messages").insertBefore(node, document.getElementById("messages").firstChild);
        }
        num++;
      }
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
    let messageKey = messages[i].id
    messages[i].parentNode.removeChild(messages[i]);
    localStorage.removeItem(messageKey);
    location.reload();
  });
}
