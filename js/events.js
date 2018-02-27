//define functions here

function getIt(){
  $('p').on("click", event => alert("Hey!"))
}
function frameIt(){
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}
function pressIt(){
  $('#typing').on('keydown', function(event){
    console.log(event)
    if (event.which === 71){
      alert('You pressed the G key!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
