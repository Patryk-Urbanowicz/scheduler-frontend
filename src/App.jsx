import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import Schedule from "./routes/Schedule.jsx";

export default function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: 'schedule',
                    element: <Schedule />
                }
            ]
        }
    ])

  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}


