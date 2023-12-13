
function scuberGreetingForFeet(dist){
  // Write your code here!
  let result;
  if (dist < 400){
    result = 'This one is on me!';
  }
  else if (dist > 400 && dist <= 2001){
    result = 'I will gladly take your thirty bucks.';
  }
  else if (dist > 2001 && dist <= 2501){
    result = 'No can do.';
  }
  else {
    result = 'Cannot travel that far ';
  }
  return result
}


function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good.";
  }
  else if (city !== "NYC") {
    return "No go.";
  }
  else {
    return "Invalid City"
  }
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;
  if (tip === 'generous'){
    result = "Thank you so much.";
  }
  else if (tip === 'not as generous'){
    result = "Thank you.";
  }
  else if (tip === 'thanks for everything'){
    result = "Bye.";
  }
  else {
    result = "invalid tip"
  }
  return result;
}