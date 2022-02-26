function searchBook() {
  var searchText = document.getElementById("searchText").value;
  var url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;

  //Creation and invocation of the request
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  //Waiting for response
  xhr.onreadystatechange = function () {
    //State -> 0, 1, 2, 3, 4(DONE)
    //Status Code => https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    if (xhr.readyState === 4 && xhr.status === 200) {
      var items = JSON.parse(xhr.response).items;
      var books = new Array();
      items.forEach(function (value) {
        var bookTitle = value.volumeInfo.title;
        if(bookTitle !== "" && bookTitle !== undefined && bookTitle !== ","){
            books.push(`<p>${bookTitle}</p>`);
        }
      });
      //console.log("books is :", books);
      document.getElementById("results").innerHTML = books;
    }
  };
}
