import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllBooks from "../pages/allBooks/AllBooks";
import AddBook from "../pages/addBook/AddBook";
import BorrowedBooks from "../pages/borrowedBooks/BorrowedBooks";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import CategoryItems from "../pages/categoryBooks/CategoryItems";
import BookDetails from "../pages/bookDetails/BookDetails";
import UpdateBook from "../pages/updateBook/UpdateBook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: ()=>fetch('http://localhost:5000/categories'),
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/categories`),
      },
      {
        path: '/all-books',
        element: <ProtectedRoute>
          <AllBooks></AllBooks>
        </ProtectedRoute>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/books`),
      },
      {
        path: '/add-book',
        element: <ProtectedRoute>
          <AddBook></AddBook>
        </ProtectedRoute>
        
      },
      {
        path: '/update-book/:id',
        element: <ProtectedRoute>
          <UpdateBook></UpdateBook>
        </ProtectedRoute>,
        // loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/updateBook/${params.id}`),
        
      },
      {
        path: '/borrowed-books',
        element: <ProtectedRoute>
          <BorrowedBooks></BorrowedBooks>
        </ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/categories/:category',
        element: <CategoryItems></CategoryItems>
      },
      {
        path: '/book-details/:id',
        element:<ProtectedRoute>
           <BookDetails></BookDetails>
        </ProtectedRoute>
      },
  
    ]
  },
]);

export default router