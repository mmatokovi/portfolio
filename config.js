$(".readmore").on('click', function(){
    $(this).parent().toggleClass("showContent");

    var promjeniText=$(this).parent().hasClass("showContent") ? "-Read less" : "-Read more...";
    $(this).text(promjeniText);
});

var body = document.querySelector('body');
var fas = document.querySelector('.fas');
var content = document.querySelector('.content');
var sidebar = document.querySelector('.sidebar');
var footer = document.querySelector('#footer');
var logo = document.querySelector('#logo');

$('.hamburger, .sidebar>ul>li>a, .sidebar>a').on('click', function(){
    body.classList.toggle('overflow');
    fas.classList.toggle('fa-times');
    content.classList.toggle('blur');
    sidebar.classList.toggle('show');
    footer.classList.toggle('blur');
});

$('html').click(function(event) {
    if ($(event.target).closest('nav, .show').length === 0 || event.target == logo) {
        body.classList.remove('overflow');
        fas.classList.remove('fa-times');
        content.classList.remove('blur');
        sidebar.classList.remove('show');
        footer.classList.remove('blur');
    }
});

var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

function myFunc(el){
    var imgSrc = el.src;
    var altText = el.alt;
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = altText;
    document.body.style.overflow = "hidden";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}
function mobileMenu(){
    var x= document.getElementById("mobilni-meni")
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

let ip;

fetch('https://api.ipify.org/?format=json')
  .then(results => results.json())
  .then(data => {
        ip=data.ip;
    console.log("Your IP: "+ data.ip);
    document.getElementById("ipadresa").innerHTML = "Your IP: "+ ip;
      });

function checkTime(i) {
    if (i < 10) {
          i = "0" + i;
        }
    return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();


if(document.addEventListener){
document.addEventListener("DOMContentLoaded", function(){
loadedBroken();
});
} else if(document.attachEvent){
document.attachEvent("onreadystatechange", function(){
loadedBroken();
});
}

function loadedBroken(){

setInterval(loop1, 600);
console.log("loadedBroken");

}

var x = 0;

var titleText = [ "mma", "mmat", "mmato", "mmatok", "mmatoko", "mmatokov", "mmatokovi", "mmatokovi", "mmatokov", "mmatoko", "mmatok", "mmato", "mmat", "mma", "mm" ];

function loop1(){

document.title = titleText[x++%titleText.length];

}
