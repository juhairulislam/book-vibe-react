import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const Books = () => {

        const {storedBooks} = useContext(BookContext) ;

    console.log(storedBooks , 'this is handle mark as read and storedbooks');
    return (
        <div>
            This is books section
        </div>
    );
};

export default Books;