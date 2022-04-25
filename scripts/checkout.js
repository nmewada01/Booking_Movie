// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amountrs = JSON.parse(localStorage.getItem("amount"));
let wal = document.querySelector("#wallet");
wal.innerHTML = amountrs;
wal.style.textAlign = "right";


let localmovies = JSON.parse(localStorage.getItem("movie")) || [];
//console.log(localmovies)

localmovies.map(function(el){

    document.querySelector("#movie").innerHTML = null;

    let dib = document.createElement("div")


    let title = document.createElement("h2")
    title.innerText = el.Title;

    let image = document.createElement("img")
    image.src = el.Poster;

    dib.append(title,image)
    document.querySelector("#movie").append(dib);

});

function Price(e){
    e.preventDefault();
  
    let price1 = document.querySelector("#number_of_seats").value

    let seat = price1 * 100;

    if(seat<=amountrs && seat !==0){
        let b = amountrs - seat;
        document.querySelector("#wallet").innerText = b;
        localStorage.setItem("amount", JSON.stringify(b));
        alert("Booking successful!")
    }
    else if(seat>amountrs){
        alert("Insufficient Balance!");
    }

    
}
