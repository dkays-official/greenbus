let search = document.getElementById("searchBus");
let origin = document.getElementById("origin");
let destination = document.getElementById("destination");

search.addEventListener("click", function () {
    document.querySelector('.busListContainer').style.display = "block";
    seatPage();
}); 

function check(){
    if (origin.value == "") {
        alert("Please enter Origin City");
        return false;
      } else if (destination.value.trim() == "") {
        alert("Please enter Destination City");
        return false;
      }
      return true;
}

function seatPage(){
    let bookSeatBtn = document.querySelectorAll('.seatBtn');
    console.log(bookSeatBtn);
    for(let i = 0; i<bookSeatBtn.length; i++){
        bookSeatBtn[i].addEventListener('click', function(){
            window.location.href = "./seats.html"
        })
    }
}