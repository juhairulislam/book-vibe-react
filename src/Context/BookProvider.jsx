import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext =  createContext() ;

const BookProvider = ({children}) => {


       
    const [storedBooks, setStoredBooks] = useState([]) ;

    const [wishList , setWishList] = useState([]) ;



    const handleMarkAsRead = (currentBook) =>{
        // step-1: store book id 


        // step-2: where to store

        // step-3: formate for store array/collection

        // step-4: If the book already store then show a toast for alert

        // step-5: If not then add this book in array or collection

        console.log(currentBook, 'book') ;

        const existBooks = storedBooks.find((book) => book.bookId == currentBook.bookId) ;
        if(existBooks){
            toast.error ('This book already exist in read list')
        } else{
            setStoredBooks([...storedBooks, currentBook]) ;
            toast.success (`${currentBook.bookName} Is added to read list`)

        }
    }
    const handleWishList = (currentBook) =>{
        // step-1: store book id 


        // step-2: where to store

        // step-3: formate for store array/collection

        // step-4: If the book already store then show a toast for alert

        // step-5: If not then add this book in array or collection

const isExistReadList = storedBooks.find((book) => book.bookId === currentBook.bookId) ;

if(isExistReadList){
    toast.error ('This book is already in Read list') ;
    return ;
}

        const existBooks = wishList.find((book) => book.bookId == currentBook.bookId) ;
        if(existBooks){
            toast.error ('This book already exist in wish list')
        } else{
            setWishList([...wishList, currentBook]) ;
            toast.success (`${currentBook.bookName} Is added to wish  list`)

        }
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>;
};

export default BookProvider;