import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllBooks from "../pages/all books/AllBooks";
import AddBook from "../pages/add book/AddBook";
import BorrowedBooks from "../pages/borrowed books/BorrowedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/all-books',
        element: <AllBooks></AllBooks>
      },
      {
        path: '/add-book',
        element: <AddBook></AddBook>
      },
      {
        path: '/borrowed-books',
        element: <BorrowedBooks></BorrowedBooks>
      },
    ]
  },
]);

export default router