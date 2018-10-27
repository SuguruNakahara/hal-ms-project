function createNumber(jsonData) {

  // check
  console.log("整形前");
  console.log(jsonData);

  var arr = new Array();;

  if( 200 > jsonData["star-value"] || jsonData["star-value"] > 300){
    arr.push(250);
  } else {
    arr.push(jsonData["star-value"]);
  }

  if( 3 > jsonData["star-size"] || jsonData["star-size"] > 10){
    arr.push(6);
  } else {
    arr.push(jsonData["star-size"]);
  }

  if( 0.1 > jsonData["star-opacity"] || jsonData["star-opacity"] > 1){
    arr.push(0.5);
  } else {
    arr.push(jsonData["star-opacity"]);
  }

  if( 0.1 > jsonData["star-color"] || jsonData["star-color"] > 1){
    arr.push(1);
  } else {
    arr.push(jsonData["star-color"]);
  }

  //shootingstar

  if( 20 > jsonData["shooting-speed"] || jsonData["shooting-speed"] > 50){
    arr.push(20);
  } else {
    arr.push(jsonData["shooting-speed"]);
  }

  if( 0 > jsonData["shooting-size"] || jsonData["shooting-size"] > 3){
    arr.push(3);
  } else {
    arr.push(jsonData["shooting-size"]);
  }

  if( 3 > jsonData["shooting-opacity"] || jsonData["shooting-opacity"] > 10){
    arr.push(6);
  } else {
    arr.push(jsonData["shooting-opacity"]);
  }

  if( 0 > jsonData["shooting-color"] || jsonData["shooting-color"] > 3){
    arr.push(0);
  } else {
    arr.push(jsonData["shooting-color"]);
  }

  //milkyway

  if( 400 > jsonData["milkyway-value"] || jsonData["milkyway-value"] > 600){
    arr.push(500);
  } else {
    arr.push(jsonData["milkyway-value"]);
  }
  
  if( 0 > jsonData["milkyway-color"] || jsonData["milkyway-color"] > 2){
    arr.push(1);
  } else {
    arr.push(jsonData["milkyway-color"]);
  }

  if( 3 > jsonData["milkyway-size"] || jsonData["milkyway-size"] > 8){
    arr.push(5);
  } else {
    arr.push(jsonData["milkyway-size"]);
  }

  if( 0.3 > jsonData["milkyway-opacity"] || jsonData["milkyway-opacity"] > 1 ){
    arr.push(0.5);
  } else {
    arr.push(jsonData["milkyway-opacity"]);
  }

  if( 0 > jsonData["milkyway-left"] || jsonData["milkyway-left"] > 60){
    arr.push(40);
  } else {
    arr.push(jsonData["milkyway-left"]);
  }

  if( 0 > jsonData["milkyway-rotate"] || jsonData["milkyway-rotate"] > 180){
    arr.push(jsonData["milkyway-rotate"]);
  } else {
    arr.push(jsonData["milkyway-rotate"]);
  }

  console.log("整形後");
  console.log(arr);

  /* sample 計算式 */
  // Math.sin(Math.PI/jsonData["star-opacity"])

  return arr;

}
