function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// To use with proto, we cretaed a UI object
function UI() {}
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

UI.prototype.showMessage=function(message,className){
  const div=document.createElement("div");
 
  div.className=`alert ${className}`
  const mymessage=document.createTextNode(message);
  div.appendChild(mymessage);

  const container=document.querySelector(".container");
  const form=document.querySelector("#book-form");

  container.insertBefore(div,form);

setTimeout(function(){
  document.querySelector(".alert").remove();
},3000)
}

UI.prototype.clearFields = function (book) {
  document.getElementById("title").value="";
  document.getElementById("author").value="";
  document.getElementById("isbn").value="";
 
};

document.getElementById("book-form").addEventListener("submit", function (e) {
  const mtitle = document.getElementById("title").value,
    mauthor = document.getElementById("author").value,
    misbn = document.getElementById("isbn").value;
    const mybook = new Book(mtitle, mauthor, misbn);
    console.log(mybook);
    const ui = new UI();
  
    if(mtitle===""|| mauthor==="" || misbn===""){
     ui.showMessage("Please fill the fields","error");
  
     

    }
    else{
      ui.addBook(mybook);
      ui.clearFields();
    }

 
  


  e.preventDefault();
});
