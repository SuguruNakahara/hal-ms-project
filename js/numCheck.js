function createNumber(jsonData) {

  var arr = new Array();

  const fmt = (v, min, max) => {
    const diff = max - min;
    return diff / 200 * v + min;
  }
  //star
  arr.push(Math.floor(fmt(jsonData["star-value"], 200, 300)));
  arr.push(fmt(jsonData["star-size"], 3, 8));
  arr.push(fmt(jsonData["star-opacity"], 0.1, 1));
  arr.push(Math.floor(fmt(jsonData["star-color"], 0.1, 1)));

  //milkyway
  arr.push(Math.floor(fmt(jsonData["milkyway-value"], 100, 400)));
  arr.push(Math.floor(fmt(jsonData["milkyway-color"], 0, 2)));
  arr.push(fmt(jsonData["milkyway-size"], 3, 8));
  arr.push(fmt(jsonData["milkyway-opacity"], 0.3, 1));
  arr.push(Math.floor(fmt(jsonData["milkyway-left"], 0, 60)));
  arr.push(Math.floor(fmt(jsonData["milkyway-rotate"], 0, 180)));

  return arr;
}
