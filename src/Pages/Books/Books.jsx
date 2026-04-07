import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../Components/ListedBooks/ListedReadList';
import ListedWishList from '../Components/ListedBooks/ListedWishList';



const Books = () => {

    const [sortingType, setSortingType] = useState("");
    console.log(sortingType, 'Sorting type')
    return (
        <div className='container mx-auto my-8'>

            {/* drop down */}
            <div className='flex justify-center my-4'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
                        <li onClick={() => setSortingType('rating')}><a>Rating</a></li>

                        </ul>
                    
                </div>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>         <ListedReadList sortingType={sortingType}></ListedReadList> ;
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2>            <ListedWishList sortingType={sortingType}></ListedWishList>
                    </h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;