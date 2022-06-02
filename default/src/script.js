function showHide(id) {
    var ele = document.getElementById(id);
    if (getComputedStyle(ele).display === "block") {
        ele.style.display = "none";
    } else if (getComputedStyle(ele).display === "none") {
        ele.style.display = "block";
    } else {
        console.log("Something has gone wrong in showHide(ele)");
    }
}