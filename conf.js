$(".readmore").on('click', function(){
    $(this).parent().toggleClass("showContent");

    var promjeniText=$(this).parent().hasClass("showContent") ? "-Read less" : "-Read more...";
    $(this).text(promjeniText);
});

$('.hamburger, .sidebar>ul>li>a, .sidebar>a').on('click', function(){
    document.querySelector('body').classList.toggle('overflow');
    document.querySelector('.fas').classList.toggle('fa-times');
    document.querySelector('.content').classList.toggle('blur');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('#footer').classList.toggle('blur');
});

$('html').click(function(event) {
    if ($(event.target).closest('nav, .show').length === 0) {
        document.querySelector('body').classList.remove('overflow');
        document.querySelector('.fas').classList.remove('fa-times');
        document.querySelector('.content').classList.remove('blur');
        document.querySelector('.sidebar').classList.remove('show');
        document.querySelector('#footer').classList.remove('blur');
    }
});
$('#logo').on('click', function(){
        document.querySelector('body').classList.remove('overflow');
        document.querySelector('.fas').classList.remove('fa-times');
        document.querySelector('.content').classList.remove('blur');
        document.querySelector('.sidebar').classList.remove('show');
        document.querySelector('#footer').classList.remove('blur');
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
