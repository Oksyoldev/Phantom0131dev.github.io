function myFunction() {
    var x = document.getElementById("top-menu");
    if (x.className === "header") {
        x.className += "responsive";
    } else {
        x.className = "header";
    }
}