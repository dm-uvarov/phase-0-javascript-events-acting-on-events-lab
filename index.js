// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }// end if
}// end functon moveDodgerLeft


document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }else if (e.key === "ArrowRight") {
        moveDodgerRight();
      } 
});

// const 



function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    
    }// end if
}


