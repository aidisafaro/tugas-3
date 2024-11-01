import { createBrowserRouter , Link , RouterProvider } from "react-router-dom";
import SignIn from "./component/pages/SignIn";
import SignUp from "./component/pages/SignUp";

// Komponen Home didefinisikan di sini
const Home = () => (
  <div>
    <h1>Halaman Utama</h1>
    <nav className="flex gap-4">
      <Link to="/login" className="bg-blue-400 py-2 px-5">
        Login
      </Link>
      <Link to="/register" className="bg-green-400 py-2 px-5">
        Register
      </Link>
    </nav>
  </div>
);

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,  // Home didefinisikan sebelum digunakan
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;