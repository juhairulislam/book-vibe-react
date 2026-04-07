import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../Context/BookProvider';
import BookCard from '../UI/BookCard';

const ListedWishList = ({sortingType}) => {
    const { wishList } = useContext(BookContext);

    //    console.log(storedBooks , 'this is handle mark as read and storedbooks');


    const [filteredWishList, setFilteredWishList] = useState(wishList)


    useEffect(() => {

        if (sortingType) {
            if (sortingType === 'pages') {

                const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortedData);

                setFilteredWishList(sortedData)

            } else if (sortingType === 'rating') {


                const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
                console.log(sortedData);

                setFilteredWishList(sortedData)

                // 

            }
        }

    }, [sortingType, wishList])

    if (filteredWishList.length === 0) {
        return <div className=' h-[60vh] bg-zinc-100 flex justify-center items-center w-[95%] mx-auto mt-6 rounded-xl'>
            <h1 className='text-5xl font-bold'>No Wish list data found</h1>
        </div>
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                filteredWishList.map((book, ind) => (
                    <BookCard key={ind} book={book}></BookCard>
                ))
            }
        </div>
    );
};

export default ListedWishList;