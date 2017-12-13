let num = 0
if (localStorage.getItem("1") !== undefined) {
  const addMessage = () => {
    for (let key in localStorage) {
      let node = document.createElement("DIV")
      var textnode = document.createTextNode(localStorage.getItem(key))
      node.className = "messages";
      node.appendChild(textnode)
      document.getElementById("messages").appendChild(node);
      num++;
    }
  }
  addMessage();
}

document.getElementById("post").addEventListener("click", (event) => {
  let post = document.getElementById("input-form").value;
  num = (num + 1).toString();
  localStorage.setItem(num, post);
});
