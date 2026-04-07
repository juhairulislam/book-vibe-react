import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookProvider';
import BookCard from '../UI/BookCard';

const ListedWishList = () => {
         const {wishList } = useContext(BookContext);
       
        //    console.log(storedBooks , 'this is handle mark as read and storedbooks');

        if(wishList.length === 0){
            return <div className=' h-[60vh] bg-zinc-100 flex justify-center items-center w-[95%] mx-auto mt-6 rounded-xl'>
                <h1 className='text-5xl font-bold'>No Wish list data found</h1>
            </div>
        }
       return (
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'> 
   
   {
       wishList.map((book, ind) => (
           <BookCard key={ind} book={book}></BookCard>
       ))
   }            
           </div>
       );
};

export default ListedWishList;