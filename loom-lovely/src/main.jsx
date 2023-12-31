import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"
import ProductView from './Pages/ProductView';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "Product",
        element: <ProductView />
    },
])

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<RouterProvider router = {router} />)