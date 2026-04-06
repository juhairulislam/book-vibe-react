import React, { use } from 'react';
import BookCard from '../Components/UI/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {

    const books = use(booksPromise);
    console.log(books)
    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3'>
            {
                books.map((book,ind) => {
                    return <BookCard key={ind} book={book}></BookCard>
                })
            }

        </div>
    );
};

export default AllBooks;