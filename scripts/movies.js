// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amountrs = JSON.parse(localStorage.getItem("amount"));
let wal = document.querySelector("#wallet");
wal.innerHTML = amountrs;
wal.style.textAlign = "right";

let id;

async function SearchMovies(){
    //adec4a1d

    try{
        let query = document.querySelector("#search").value

        const res = await fetch(`https://www.omdbapi.com/?apikey=adec4a1d&type=movie&t=${query}`);
    
        const data = await res.json()

        return data;
        
        console.log(data)
        




    }catch (url) {
        console.log(err);
    }

   

    
}
let localmovies = JSON.parse(localStorage.getItem("movie")) || [];

function append(data){

        document.querySelector("#movies").innerHTML = null;

        let dib = document.createElement("div");

        let image = document.createElement("img")
        image.src = data.Poster;
        
        let title = document.createElement("h2")
        title.innerText = data.Title;

        let actors = document.createElement("h3")
        actors.innerText = data.Actors

        let release = document.createElement("h4")
        release.innerText = data.Released;

        let imdb = document.createElement("p")
        imdb.innerText = data.imdbRating;

        let btn = document.createElement("button")
        btn.innerText = "Book Now"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){

                localmovies.push(data)
                localStorage.setItem("movie", JSON.stringify(localmovies));
                window.location.href = "checkout.html"


        })

        dib.append(image,title,actors,release,imdb,btn);
        document.querySelector("#movies").append(dib);

    }

    async function main(){
        let data = await SearchMovies();

        if(data===undefined){
            return false;
        }
        append(data);
    }


    function debounce(func,delay){
            if(id){
                clearTimeout(id);
            }
            id=setTimeout(function(){
                func();
            },delay)

        }

        