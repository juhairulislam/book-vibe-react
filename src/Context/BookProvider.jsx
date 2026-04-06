import React, { Children, createContext, useState } from 'react';

export const BookContext =  createContext() ;

const BookProvider = ({children}) => {


       
    const [storedBooks, setStoredBooks] = useState([]) ;



    const handleMarkAsRead = (currentBook) =>{
        // step-1: store book id 


        // step-2: where to store

        // step-3: formate for store array/collection

        // step-4: If the book already store then show a toast for alert

        // step-5: If not then add this book in array or collection

        console.log(currentBook, 'book') ;

        const existBooks = storedBooks.find((book) => book.bookId == currentBook.bookId) ;
        if(existBooks){
            alert('This book already exist')
        } else{
            setStoredBooks([...storedBooks, currentBook]) ;
            alert(`${currentBook.bookName} Is added to list`)

        }
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>;
};

export default BookProvider;