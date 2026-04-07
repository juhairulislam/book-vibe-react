import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../Components/ListedBooks/ListedReadList';
import ListedWishList from '../Components/ListedBooks/ListedWishList';



const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);

    console.log(storedBooks , 'this is handle mark as read and storedbooks');
    return (
        <div className='container mx-auto my-8'>


            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>         <ListedReadList></ListedReadList> ;
</h2>
                </TabPanel>
                <TabPanel>
                    <h2>            <ListedWishList></ListedWishList>
</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;