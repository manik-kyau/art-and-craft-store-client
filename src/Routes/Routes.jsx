import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddCraftItem from "../Components/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../Components/MyArtAndCraftList/MyArtAndCraftList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CraftDetails from "../Components/CraftDetails/CraftDetails";
import AllArtAndCrafts from "../Components/AllArtAndCrafts/AllArtAndCrafts";
import UpdateCraft from "../Components/UpdateCraft/UpdateCraft";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=> fetch('https://art-and-craft-store-server-delta.vercel.app/crafts')
        },
        {
          path:'/craftdetails/:id',
          element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
          loader:()=>fetch('https://art-and-craft-store-server-delta.vercel.app/crafts'),
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/addCraft',
          element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
          path:'/myArt',
          element:<PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
        },
        {
          path:'/allArt&Craft',
          element:<AllArtAndCrafts></AllArtAndCrafts>,
          loader:()=> fetch('https://art-and-craft-store-server-delta.vercel.app/crafts')
        },
        {
          path:'/updateCraft/:id',
          element:<PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
        },
        {
          path:'/contact',
          element:<PrivateRoute><Contact></Contact></PrivateRoute>,
        },
      ]
    },
  ]);
  
  export default router;
