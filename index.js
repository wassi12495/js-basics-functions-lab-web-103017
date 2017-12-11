// Code your solution in this file!

function distanceFromHqInBlocks(block){
  if (block - 42 < 0 ){
    return (block - 42) * -1;
  }
  else {
    return block - 42;
  }

}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(curr, start){
  if (start - curr < 0 ){
    return (curr - start) * 264;
  }
  else {
    return (start - curr) * 264;
  }
}

function calculatesFarePrice(start, destination){
  let dist = distanceTravelledInFeet(start,destination);
  if (dist < 400){
    return 0;
  }
  else if (dist > 400 && dist < 2000){
    return dist * .02
  }
  else if (dist > 2000 && dist < 2500){
    return 25
  }
  else {
    return "cannot travel that far"
  }



}
