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
        </ProtectedRoute>
      },
      {
        path: '/add-book',
        element: <ProtectedRoute>
          <AddBook></AddBook>
        </ProtectedRoute>
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
        element: <CategoryItems></CategoryItems>
      },
    ]
  },
]);

export default router