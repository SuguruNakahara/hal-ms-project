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

  console.log("整形後");
  console.log(arr);

  /* sample 計算式 */
  // Math.sin(Math.PI/jsonData["star-opacity"])

  return arr;

}