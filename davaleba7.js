let book = {
    satauri : "The Lord of the Rings",
    avtori : 'J.R.R Tolkien',
    gamocemis_weli : 1994,
    gverdi : 1894,
    wakitxuli : true
}
console.log(book)

let library={
    books:[]
}

let wigni_1={
  title: "vefxistyaosani",
  author: "shota rustaveli",
  read: false
}

let wigni_2={
    title: "chemi tavgadasavali",
    author: "akaki wereteli",
    read: false
}
library.books.unshift(wigni_1);
library.books.push(wigni_2);

let search_by_title = prompt("search by title:  ");

for(let i = 0; i<library.books.length; i++){
    if(library.books[i].title === search_by_title){
        library.books[i].read = true;
    }
}

let search_by_author = prompt("search by author:  ");

for(let i = 0; i<library.books.length; i++){
    if(library.books[i].author === search_by_author){
        library.books[i].read = true;
    }
}

