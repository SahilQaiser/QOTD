function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          if (success)
            success(JSON.parse(xhr.responseText));
        } else {
          if (error)
            error(xhr);
        }
      }
    };
    xhr.open("GET", path, true);
    xhr.setRequestHeader("x-rapidapi-host", "quotes15.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "cdd525758fmsh6d05e9faabb6560p18230djsne23c74e2194c");
      xhr.send();
  }
  
  loadJSON('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en',
    function(data) {
      console.log(data);
      var quote = document.getElementById('quote');
      quote.innerHTML = data.content+" ~ "+data.originator.name;
    },
    function(xhr) {
      console.error(xhr);
    }
  );
  