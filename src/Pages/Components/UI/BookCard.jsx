import React from 'react';
import { CiStar } from 'react-icons/ci';


const BookCard = ({book}) => {
    return (
        < div className="card  w-86 shadow-sm">
                        <figure className='bg-base-200 p-2'>
                            <img className='h-40 w-35 p-4'
                                src={book.image}
                                alt={book.bookName} />
                        </figure>
                        <div className="card-body">
                               <div className='flex items-center gap-2'>
                                    {
                                        book.tags.map((tag,index)=> {
                                            return <div key={index} className="badge badge-outline badge-success">{tag}</div>
                                        })
                                    }
                                </div>
                            <h2 className="card-title text-xl font-bold">
                                {book.bookName}      
                             
                            </h2>
                            <p>By: {book.author}</p>
                            <div className="card-actions justify-between border-t border-gray-300 mt-4">
                                <div className=" font-semibold mt-4">{book.category}</div>
                                <div className=" font-semibold mt-4 flex items-center gap-1">{book.rating} <CiStar /></div>
                            </div>
                        </div>
                    </div>
    );
};

export default BookCard;