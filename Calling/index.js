const {add,display,update,updateMany,deleteBook}=require("../updating/update");


const addedBook=
    {
        title: 'The new book',
        author: 'Angela Smith',
        year: 1999 
       };

       const obj={
        title:"This is the new book",
        author: 'Uwera Ga'
        }; 



       add(addedBook);
       display();
       update(1,'year',2000);
      
       updateMany(1,obj);
       deleteBook(1);


