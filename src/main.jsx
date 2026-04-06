import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, } from "react-router/dom";
import { router } from './routes/Router';
import BookProvider from './Context/BookProvider';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>

<RouterProvider router={router} />  
      
    </BookProvider>

</StrictMode>,
)
