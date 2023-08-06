var options=["rock","scissors","paper"];
var user, house;
var points=0;

$(".game-obj").on("click",function(){
  user = $(this).attr("id");
  house = newTurn();
   
  let result = checkWinner();

  var message;
  if(result===0){message="DRAW"}
  else if(result===1){message="YOU WIN"}
  else{message="YOU LOSE"}

  print(message, result);

  $(".score").text(points);
});


function newTurn(){
  let idx = Math.floor(Math.random()*3);
  let houseChoice = options[idx];
  return houseChoice;
}


function checkWinner(){
  let result=0;
  if(user===house)
  {
    result=0;
    return result;
  }
  if(user==="rock")
  {
    if(house==="paper" || house==="spock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="scissors")
  {
    if(house==="rock" || house==="spock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="paper")
  {
    if(house==="scissors" || house==="lizard")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="spock")
  {
    if(house==="paper" || house==="lizard")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(user==="lizard")
  {
    if(house==="scissors" || house==="rock")
    {
      result=-1;
    }
    else{
      result=1;
    }
  }
  if(result===-1){points--;}
  else if(result===1){points++;}
  
  return result;
}

function print(msg, result){
  $("#play-game").addClass("hide");
  $("#result").removeClass("hide");

  $(".message h1").text(msg);

  let userImg = "images/icon-"+user+".svg";
  let houseImg = "images/icon-"+house+".svg";

  $(".you-chose img").attr("src",userImg);
  $(".user-choice").addClass(user);

  $(".i-chose img").attr("src",houseImg);
  $(".house-choice").addClass(house);

  if(result===1){
    $(".user-wins").addClass("win-effect-left");
    $(".play-again").addClass(user+"-col");
  }
  else if(result===-1){
    $(".house-wins").addClass("win-effect-right");
    $(".play-again").addClass(house+"-col");
  }

}

$(".play-again").on("click", function(){
  $("#play-game").removeClass("hide");
  $("#result").addClass("hide");

  $(".user-choice").removeClass(user);
  $(".house-choice").removeClass(house);

  $(".user-wins").removeClass("win-effect-left");
  $(".house-wins").removeClass("win-effect-right");

  $(".play-again").removeClass(user+"-col");
  $(".play-again").removeClass(house+"-col")

});

$(".rules-button").on("click", function(){
  $(".rules-disp").removeClass("hide");
  $(".toggle-rules").addClass("blackout");
});
$(".closebt").on("click", function(){
  $(".rules-disp").addClass("hide");
  $(".toggle-rules").removeClass("blackout");
});
