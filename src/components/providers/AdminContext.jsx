import { createContext, useState, React } from "react";

export const AdminContext = createContext();
export function AdminProvider({ children }) {
  const [products, setProducts] = useState([]);

  //   const removeFromWishlist = (product) => {
  //     setItems((_items) => _items.filter(({ _id }) => product._id !== _id));
  //   };

  return (
    <AdminContext.Provider value={{ products, setProducts }}>
      {children}
    </AdminContext.Provider>
  );
}
export default AdminProvider;
