import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllBooks from "../pages/all books/AllBooks";
import AddBook from "../pages/add book/AddBook";
import BorrowedBooks from "../pages/borrowed books/BorrowedBooks";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/error/ErrorPage";

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
    ]
  },
]);

export default router