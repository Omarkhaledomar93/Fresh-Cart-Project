import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/MainLayout/MainLayout"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import WishList from "./Pages/WishList/WishList"
import NotFound2 from "./Pages/NotFound2/NotFound2"
import CounterContextProvider from "./Context/CounterContext/CounterContext"
import UserContextProvider from "./Context/UserContext/UserContext"
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import { QueryClient, QueryClientProvider } from "react-query"
import CartContextProvider from "./Context/CartContext/CartContext"
import { Toaster } from "react-hot-toast"
import Checkout from "./Pages/Checkout/Checkout"
import AllOrders from "./Pages/AllOrders/AllOrders"
import Categories from "./Components/Categories/Categories"
import Brands from "./Components/Brands/Brands"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword"
import VerifyCode from "./Pages/VerfiyCode/VerifyCode"
import WishListContextProvider from "./Components/WishListContext/WishListContext"
import { useEffect } from "react"
import { initFlowbite } from "flowbite"



function App() {


  let routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element:
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
        },
        {
          path: "cart",
          element:
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
        },

        {
          path: "wish",
          element:
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
        },
        {
          path: "categories",
          element:
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
        },
        {
          path: "brands",
          element:
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
        },

        {
          path: "allorders",
          element:
            <ProtectedRoute>
              <AllOrders />
            </ProtectedRoute>
        },
        {
          path: "checkout",
          element:
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
        },
        {
          path: "productdetails/:id",
          element: <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot", element: <ForgotPassword /> },
        { path: "verify", element: <VerifyCode /> },
        { path: "*", element: <NotFound2 /> }
      ]
    }])


  const queryClient = new QueryClient()
useEffect(() => {
 initFlowbite();
}, [])



  return (

    <QueryClientProvider client={queryClient}>
    
      <UserContextProvider>


        <CartContextProvider>

          <WishListContextProvider>

            <CounterContextProvider>

              <RouterProvider router={routers}></RouterProvider>
              <Toaster />
            </CounterContextProvider>
          </WishListContextProvider>
        </CartContextProvider>

      </UserContextProvider>


    </QueryClientProvider>
  )



}

export default App
