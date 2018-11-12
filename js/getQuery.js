function getQuery() {
  if (1 < document.location.search.length) {
    const query = document.location.search.substring(1);
    const parameters = query.split('&');
    let result = new Object();
      for (let i = 0; i < parameters.length; i++) {
        let element = parameters[i].split('=');
        let paramName = decodeURIComponent(element[0]);
        let paramValue = decodeURIComponent(element[1]);
        result = decodeURIComponent(paramValue);
        // result[paramName] = decodeURIComponent(paramValue); // json形式で複数取得の場合
      }
    return result;
  }
  return null;
}