/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


function togglefunction()
{
  // document.getElementById("outer-container").classList.toggle('active-cont');
  //document.getElementById("toggleinner").classList.toggle('active-toggleinner');
  document.getElementById("sidebar").classList.toggle('active-sidebar');
}

window.onload=function(){
let mainimage=document.getElementById("main-image")
let images=document.getElementById("images").children;

images[0].onclick= function(){
  mainimage.src=images[0].src;
};

images[1].onclick= function(){
  mainimage.src=images[1].src;
};

images[2].onclick= function(){
  mainimage.src=images[2].src;
};

images[3].onclick= function(){
  mainimage.src=images[3].src;
};
}