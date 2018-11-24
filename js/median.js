var median = function(arr) {

  // 0を削除 より正確な数値を求める場合
  // arr = arr.filter(function( item ) {
  //   return item !== 0;
  // });

  var array_length, mid;
  array_length = arr.length;
  new_array = arr.slice(0); //引数として渡された配列のコピーを作成
  new_array.sort(function(a, b){ //コピーした配列を降順に並べ替え
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
  });
  mid = Math.floor(array_length / 2); //降順に並んだ配列の中央に位置する要素のインデックス
  if (array_length % 2 == 1) {
    return new_array[mid]; //配列の要素数が奇数個の場合の中央値を返す
  } else {
    return (new_array[mid - 1] + new_array[mid]) / 2; //配列の要素数が偶数個の場合の中央値を返す
  }
}

var median_arr = function(arr) { //2次元配列の列ごとの中央値を求める
  var arr_2d = [];
  for (var i = 0, len_1 = arr[i].length; i < len_1; i++) {
    var arr_temp = [];
    for (var j = 0, len_2 = arr.length; j < len_2; j++) {
      arr_temp.push(arr[j][i]); //2次元配列の各列を1次元配列として抽出
    }
    arr_2d.push(median(arr_temp)); //2次元配列の各列ごとの中央値を抽出
  }
  return arr_2d; //中央値の配列を返す
}