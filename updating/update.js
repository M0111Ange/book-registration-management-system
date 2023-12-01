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

    //This function is the function that will delete a book from the database

    // const deleteBook=(id)=>{
    //     exist.id= booksDatabase.find(ele=>ele.id===id);
    //     if (!exist){
    //         console.log("\nBook not found");
            
    //     }

    //     else{
    //         const remainingBook = [];
    //         for (exist[key]=
    //     }
    // }


    //This function is the function that will update a book in the database

     const update=(id,key,value)=>{
        const exist= 
        exist.id= booksDatabase.find(ele=>ele.id===id);
        if (!exist){
            console.log("\nBook not found");
            
        }
        else{
            exist[key]=value;
            console.log("\n this the updated book");
            console.log(exist);
        }
    }



    module.exports={
        add,
        display,
        update
    };