import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/ProductTableColumns";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import AddProductTableForm from "@/components/AddProductTable";
import Navbar from "@/components/Navbar";
const baseURL = import.meta.env.VITE_BASE_URL;

const Admin = () => {
  const [products, setProducts] = useState([]);
  const columnsLength = columns.length - 1;
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* navbar component */}
      <Navbar />

      {/* admin page content */}
      <div className="container mx-auto py-10">
        <div className="float-right pl-4">
          <Button className="mt-4 rounded-xl text-black bg-white border-black-500 border-2 hover:opacity-50 hover:text-black hover:bg-white">
            <AddProductTableForm />
          </Button>
        </div>
        <DataTable
          columnsLength={columnsLength}
          columns={columns}
          data={products}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default Admin;
