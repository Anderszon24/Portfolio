document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        // Ocultar el loader
        document.querySelector(".loader").style.display = "none";
        document.querySelector("#text-loader").style.display = "none";
        document.querySelector("body").style.backgroundColor = "#9bfab0";
        document.querySelector("body").style.margin = "14px";
        document.querySelector("body").style.color = "#fff";
        document.querySelector("#main-content").style.display = "block";
    }, 1500);//3500 mls = 3.5s
});