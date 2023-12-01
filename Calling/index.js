const {add,display,update}=require("../updating/update");


const addedBook=
    {
        title: 'The new book',
        author: 'Angela Smith',
        year: 1999 
       };

// const updatedBook={
//     a
// }       



       add(addedBook);
       display();
       update(1,'year',2000);

