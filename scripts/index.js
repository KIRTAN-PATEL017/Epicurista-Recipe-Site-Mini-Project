const Trending = ["/images/slideshow-trending/image1.jpg", "/images/slideshow-trending/image2.jpg",
"/images/slideshow-trending/image3.jpg", "/images/slideshow-trending/image4.jpg", "/images/slideshow-trending/image5.jpg"];


const Recommended = ["/images/slideshow-recommended/image1.jpg", "/images/slideshow-recommended/image2.jpg",
"/images/slideshow-recommended/image3.jpg", "/images/slideshow-recommended/image4.jpg","/images/slideshow-recommended/image5.jpg"];
var indexTrend = 0;
var indexRecommend = 0;

setInterval(Trend,4000);

async function Trend(){
    setTimeout(Recommend, 2000)
    var Card = document.getElementsByClassName("card4");
    indexTrend = indexTrend%5;
    Card[0].style.backgroundImage = `url(${Trending[indexTrend++]})`;
}

async function Recommend(){
    var Card = document.getElementsByClassName("card2");
    indexRecommend = indexRecommend%5;
    Card[0].style.backgroundImage = `url(${Recommended[indexRecommend++]})`;
}

function north(){
    var Home = document.getElementsByClassName("home");
    Home[0].style.display = "None";
    var N = document.getElementsByClassName("North");
    N[0].style.display = "flex";
}
function home(){
    var Home = document.getElementsByClassName("home");
    Home[0].style.display = "grid";
    var N = document.getElementsByClassName("North");
    N[0].style.display = "none";
}