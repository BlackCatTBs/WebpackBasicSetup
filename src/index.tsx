import {createRoot} from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import path from "path";
import { About } from "./pages/About";
import { AdminPanel } from "./pages/AdminPanel";
import { Suspense } from "react";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/about',
            element: <Suspense fallback={'Loading...'}><About/></Suspense>
        },
        {
            path: '/panel',
            element: <Suspense fallback={'Loading...'}><AdminPanel/></Suspense>
        }
      ]
    },
]);

container.render(<RouterProvider router={router} />)