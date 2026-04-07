import React, { useContext } from 'react';
import BookCard from '../UI/BookCard';
import { BookContext } from '../../../Context/BookProvider';

const ListedReadList = () => {
      const { storedBooks} = useContext(BookContext);
    
        console.log(storedBooks , 'this is handle mark as read and storedbooks');

        if(storedBooks.length === 0){
            return <div className=' h-[60vh] bg-zinc-100 flex justify-center items-center w-[95%] mx-auto mt-6 rounded-xl'>
                <h1 className='text-5xl font-bold'>No Read list data found</h1>
            </div>
        }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

{
    storedBooks.map((book, ind) => (
        <BookCard key={ind} book={book}></BookCard>
    ))
}            
        </div>
    );
};

export default ListedReadList;