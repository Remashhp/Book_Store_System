console.log('Welcome to choe Bookstore: \n this the list of books that we have \:)');

/*name-writer-price- count */

let BOOKS=[["Start with why",  "Simon Sinek" ,80.0 ,13],

           ["But how do it know",  "J. Clark Scott" ,59.9 ,22],

           ["Clean Code",  "Robert Cecil Martin" ,50.0 ,5],

           ["Zero to One",  "Peter Thiel" ,45.0 ,12],

           ["You don't know JS",  "Kyle Simpson" ,39.9,9]
];
function print(list){
    for (let i = 0; i < list.length; i++) {
        console.log("Book id: "+i +"     Name:"+list[i][0]);}
}
print(BOOKS);    


function addBook(name,Author,price,count){

    BOOKS.push([name,Author,price,count]);
    console.log("Book added successfully!")
}

addBook('he Lord of the Rings','J. R. R. Tolkien',25.99,5);
/*console.log(BOOKS);*/

function modify(list, id, name, author, price, count) {
    // Check if the ID is within the list's bounds
    if (id >= 0 && id < list.length) {
      list[id][0] = name;
      list[id][1] = author;
      list[id][2] = price;
      list[id][3] = count;
      console.log("Book modified successfully!");
      return list;
    } else {
      console.error("Invalid book ID. Book not modified.");

    }
  } 


const modifiedList = modify(BOOKS, 1, "Changed", "J. Clark Scott", 59.9, 1);

console.log(modifiedList); 


function Delete(list,id){
    if (id >= 0 && id < list.length) {
        list.splice(id);
      console.log("Book deleted successfully!");
      return list;
    } else {
      console.error("Invalid book ID. Book not deleted.");


    }}


    const deletedList = Delete( modifiedList,4); // Delete element at index 2
    console.log(deletedList);

      
/*رقم الكتاب Book Id
عنوان الكتاب Title
اسم المؤلف Author    */


function BookInfo(list,id,Title,Author) {
  let found = false;
  for(let i=0;i<list.length;i++){
    if(list[i][0]==Title&&list[i][1]==Author){
    console.log("the book price that you asked is:"+list[i][2]);
    found = true;

    }
    else{
      found = false;
    }
  
  }


}


BookInfo(deletedList,3,"Zero to One","Peter Thiel");

/*
المدخلات كالتالي:

اسم الكتاب: عنوان الكتاب المراد شراؤه Book Title.
الكمية المطلوبة: كمية الكتب أي Quantity.
الرصيد المتوفر: بمعنى رصيد الشخص الحالي.
شروط التحقق:

أن يكون الكتاب متوفر.
أن تكون الكمية المطلوبة متوفرة.
أن يكون رصيد العميل يكفي لشراء الكمية المطلوبة
*/

function buyBook(bookList, title, quantity, balance) {
  // Find the book in the list
  let found = false;
  let bookIndex;
  for (let i = 0; i < bookList.length; i++) {
    if (bookList[i][0] === title) { 
      found = true;
      bookIndex = i;
      break; 
    }
  }

  if (found) {
    const book = bookList[bookIndex];
    const author = book[1];
    const price = book[2];

    if (book[3] >= quantity) { // Check book quantity before proceeding
      const totalPrice = price * quantity;

      if (totalPrice <= balance) {
        balance -= totalPrice;
        bookList[bookIndex][3] -= quantity; // Decrement book quantity after successful purchase

        console.log(`The book "${title}" by ${author} was successfully sold.`);
        console.log(`Total price: ${totalPrice}`);
        console.log(`Your balance: ${balance}`);
      } else {
        console.log("Insufficient balance to purchase the book.");
      }
    } else {
      console.log(`Insufficient quantity of "${title}" available.`);
    }
  } else {
    console.log(`The book "${title}" is not found.`);
  }
}

buyBook(BOOKS, "Start with why", 14, 400);


