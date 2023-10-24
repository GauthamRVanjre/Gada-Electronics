import { DataTable } from "@/components/AdminDataTable";
import { columns } from "@/components/AdminTableColumns";
import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    axios
      .get("http://localhost:5555/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default Admin;
