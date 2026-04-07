import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../UI/BookCard';
import { BookContext } from '../../../Context/BookProvider';

const ListedReadList = ({sortingType}) => {
      const { storedBooks} = useContext(BookContext);
    
        console.log(storedBooks , 'this is handle mark as read and storedbooks');


        const [filteredReadList , setFilteredReadList] = useState(storedBooks)


        useEffect(() => {

            if(sortingType){
                if(sortingType === 'pages'){

                    const sortedData = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages) ;
                    console.log(sortedData) ;

                    setFilteredReadList(sortedData)

                }else if(sortingType === 'rating'){


                        const sortedData = [...storedBooks].sort((a,b) => a.rating - b.rating) ;
                    console.log(sortedData) ;

                    setFilteredReadList(sortedData)

                    // 

                }
            }

        }, [sortingType, storedBooks])

        if(filteredReadList.length === 0){
            return <div className=' h-[60vh] bg-zinc-100 flex justify-center items-center w-[95%] mx-auto mt-6 rounded-xl'>
                <h1 className='text-5xl font-bold'>No Read list data found</h1>
            </div>
        }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

{
    filteredReadList.map((book, ind) => (
        <BookCard key={ind} book={book}></BookCard>
    ))
}            
        </div>
    );
};

export default ListedReadList;