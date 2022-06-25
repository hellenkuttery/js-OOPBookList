function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// To use with proto, we cretaed a UI object
function UI() {}


// ADD BOOK 
UI.prototype.addBook = function (book) {
  console.log(this.book);
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");

  row.innerHTML = `
   <td>${book.title}</td> 
   <td>${book.author}</td>
   <td>${book.isbn}</td> 
   <td> <a href="">X</a></td>
   `;
  list.appendChild(row);
};

// SUCCESS OR  ERROR MESSAGES
UI.prototype.showMessage = function (message, className) {
  const div = document.createElement("div");

  div.className = `alert ${className}`;
  const mymessage = document.createTextNode(message);
  div.appendChild(mymessage);

  const container = document.querySelector(".col");
  const table = document.querySelector(".table");

  container.insertBefore(div, table);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// DELETE BOOK
UI.prototype.deleteBook=function(target){
  if (target.className==="delete"){
    target.parentElement.parentElement.remove();
    
  }
}

// TO CLEAR INPUT FIELDS
UI.prototype.clearFields = function (book) {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};


document.getElementById("book-form").addEventListener("submit", function (e) {
  const mtitle = document.getElementById("title").value,
    mauthor = document.getElementById("author").value,
    misbn = document.getElementById("isbn").value;
  const mybook = new Book(mtitle, mauthor, misbn);
  console.log(mybook);
  const ui = new UI();

  if (mtitle === "" || mauthor === "" || misbn === "") {
    ui.showMessage("Please fill the fields", "error");
  } else {
    ui.addBook(mybook);
    ui.showMessage("Added Successfully", "success");
    ui.clearFields();
  }
  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click",function(e){
  const ui = new UI();
  ui.deleteBook(e.target)
  console.log(e.target)
  ui.showMessage("Deleted Successfuly", "success");
  e.preventDefault();

})