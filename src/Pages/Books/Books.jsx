import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const Books = () => {

        const {storedBooks, wishList} = useContext(BookContext) ;

    // console.log(storedBooks , 'this is handle mark as read and storedbooks');
    return (
        <div className='container mx-auto'>

            Read List : {storedBooks.length} ;
            <br />
            Wish List : {wishList.length}
           
        </div>
    );
};

export default Books;