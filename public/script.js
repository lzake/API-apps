//jshint esversion:6
$(document).ready(function(){

// Default popup for unsued icons
  let popup = () => {
     if ($('img').hasClass('onclick')) {
       setTimeout(function() {
         alert('You have no permission to do this!');
       }, 200);
     }};

// effect on icon click
  $('img').on('click', function(){
    $(this).addClass('onclick');
let iconClass = this.id;
let icons = ['my-computer', 'bin', 'internet-explorer'];
let matchCheck = icons.find(x => x == iconClass);
console.log(matchCheck);
  if (iconClass == matchCheck){
    // enables popup for unsued icons and removes effect
    popup();
    setTimeout(function() {
           $('img').removeClass('onclick');
         }, 600);
  } else {
    // for others removes effect
    setTimeout(function() {
           $('img').removeClass('onclick');
         }, 200);
         addPlayer();
  }
});




});
