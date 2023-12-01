const {booksDatabase}= require("../Database/book");

//This function is the function that will add new books to the database


const add=(newBook)=>{
    newBook.id= booksDatabase.push(newBook);
    console.log("\nAdded new book");
    console.log(booksDatabase);}


    //This function is the function that will display all books in the database

    const display = ()=>{
        console.log("\nDisplay all books\n");
        console.log(booksDatabase);

    }

    // This function is the function that will delete a book from the database

    const deleteBook=(id)=>{
        var exist= booksDatabase.find(ele=>ele.id===id);
        if (!exist){
            console.log("\nBook not found");
            
        }

        else{
            var remainingBook = [];
            remainingBook= booksDatabase.filter(ele=>ele.id!==id);
            console.log("\nRemained books after deleting\n");
            console.log(remainingBook);
        }
    }


    //This function is the function that will update a book in the database

     const update=(id,key,value)=>{
         var exist= booksDatabase.find(ele=>ele.id===id);
        if (!exist){
            console.log("\nBook not found");
            
        }
        else{
            exist[key]=value;
            console.log("\n this the updated book");
            console.log(exist);
        }
    }

    //This function is the function that will updates many element  in the database

const updateMany=(id,obj)=>{
         var exist= booksDatabase.find(ele=>ele.id===id);
        if (!exist){
            console.log("\nBook not found");
            
        }
        else{
        for (key in obj){
            exist[key]=obj[key];
            console.log("\n the updated ones");
            console.log(exist);
        }
    }
}
    

    



    module.exports={
        add,
        display,
        update,
        updateMany,
        deleteBook
    };