var createButton = document.getElementById("createbtn");

var modal = document.getElementById("popup-modal");

var closeButton = document.getElementsByClassName("close")[0];


createButton.onclick = function () {
    modal.style.display = "block";

}

closeButton.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}