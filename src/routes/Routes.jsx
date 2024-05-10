import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllBooks from "../pages/all books/AllBooks";
import AddBook from "../pages/add book/AddBook";
import BorrowedBooks from "../pages/borrowed books/BorrowedBooks";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
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