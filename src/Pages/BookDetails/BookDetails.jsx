import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';


const BookDetails = () => {

    const { bookId: booksParamsId } = useParams();
    // console.log(bookId , 'bookId')

    const books = useLoaderData()
    console.log(books, 'books')

    const expectedBook = books.find(book => book.bookId == booksParamsId);
    console.log(expectedBook, 'expected Books');

    const { image, bookName, author, category, tags, review, totalPages, rating, publisher, yearOfPublishing } = expectedBook;


    return (
        <div className="card grid grid-cols-2 lg:card-side bg-base-100 shadow-sm p-10 container mx-auto my-5">
            <figure className='bg-base-300 p-4 rounded-xl'>
                <img
                    src={image}
                    alt="Album"
                    className='w-80 rounded-md'
                />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-4xl font-semibold">{bookName}</h2>
                <p className='text-xl font-medium'>By: {author}</p>
                <p className='text-xl font-normal border-t border-b'>{category}</p>
                <p className='font-normal'>Review: {review}</p>
                <div className='flex items-center gap-2'>
                    {
                        tags.map((tag, index) => {
                            return <div key={index} className="badge badge-outline badge-accent">{tag}</div>
                        })
                    }
                </div>

                <div className="card-action border-t flex justify-between">
                    <div>        <div className='flex justify-between items-center gap-2 mt-4'>
                        <span>Number of Pages: </span> <span>{totalPages}</span>
                    </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Publisher: </span> <span>{publisher}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Year of Publishing: </span> <span>{yearOfPublishing}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>

                              <button className="btn btn-accent">Read</button>
                              <button className="btn btn-info">Wishlist</button>



                    </div>    
                    </div>
            </div>
        </div>
    );
};

export default BookDetails;