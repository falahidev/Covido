showSnack = (text) => {
    let snack = document.getElementById("snackbar");
    snack.innerHTML = text;
    
    snack.className = "show";
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

addCss = (fileName) => {
    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
}
  
addCss('../css/components/snackbar.css');
let snackbar = document.createElement('div');
snackbar.setAttribute('id', 'snackbar');
document.body.appendChild(snackbar);