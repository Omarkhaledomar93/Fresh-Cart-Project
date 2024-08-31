
// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const wishListContext = createContext()

// let headers = { token: localStorage.getItem("userToken") }


// export default function WishListContextProvider(props) {

//     const [numberOfWishListItems, setNumberOfWishListItems] = useState(0)

//     function addToList(productId) {

//         return axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",

//              {productId },
//             {  headers })
//             .then((response) =>console.log(response))
             
//             .catch((error) => error)
//     }


// //     function getLoggedCart() {
// //         return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
// //             headers,
// //         })
// //             .then((response) => response)
// //             .catch((error) => error)
// //     }

// //     function deleteSpecificItem(id) {
// //         return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
// //             {
// //                 headers,

// //             }

// //         ).then((response) => response)
// //             .catch((error) => error)
// //     }

// //     function updateProdcut(id, count) {
// //         return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
// //             {
// //                 count: count,
// //             },
// //             { headers }
// //         )
// //             .then((response) => response)
// //             .catch((error) => error)
// //     }

// //     function onlinePayment(cartId, shippingAddress) {
// //         return axios.post(
// //             `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/66bf089ced0dc0016c750268?`,
// //             { shippingAddress },
// //             {
// //                 headers,
// //                 params: { url: "http://localhost:5173" },
// //             }
// //         )
// //         .then((data) => (data))
// //         .catch((error) => (error));
// //     }
    

// //     async function getCartItems() {
// //         let { data } = await getLoggedCart()

// //         setNumberOfCartItems(data.numOfCartItems)
// // }

//     useEffect(() => {
//         addToList()
//     }, [])



//     return (<wishListContext.Provider value={{
//         addToList,
//         // getLoggedCart,
//         // updateProdcut,
//         // deleteSpecificItem,
//         // numberOfCartItems,
//         // setNumberOfCartItems,
//         // onlinePayment,
//     }}>{props.children} </wishListContext.Provider>

//     )
// }





import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const wishListContext = createContext();

export default function WishListContextProvider(props) {
  const [numberOfWishListItems, setNumberOfWishListItems] = useState(0);

  
  function addToWishList(productId) {
    const headers = { token: localStorage.getItem("userToken") };

    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        { productId },
        { headers }
      )
      .then((response) => response)
      .catch((error) => error);
  }


  function getLoggedWishList() {
    const headers = { token: localStorage.getItem("userToken") };

    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", 
      
        { headers })
      .then((response) => response)
      .catch((error) => error);
  }

  
  function deleteSpecificWishListItem(id) {
    const headers = { token: localStorage.getItem("userToken") };

    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

//   // Function to fetch the wishlist items and update the number of items
//   async function getWishListItems() {
//     try {
//       let { data } = await getLoggedWishList();
//       setNumberOfWishListItems(data.numOfWishListItems);
//     } catch (error) {
//       console.error("Error fetching wishlist items:", error);
//     }
//   }


async function getCartItems() {
    let { data } = await getLoggedCart()

    setNumberOfCartItems(data.numOfCartItems)
}

 
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <wishListContext.Provider
      value={{
        addToWishList,
        getLoggedWishList,
        deleteSpecificWishListItem,
        numberOfWishListItems,
        setNumberOfWishListItems,
        
      }}
    >
      {props.children}
    </wishListContext.Provider>
  );
}


