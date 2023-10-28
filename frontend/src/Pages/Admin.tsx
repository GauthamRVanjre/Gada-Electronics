import { DataTable } from "@/components/AdminDataTable";
import { columns } from "@/components/AdminTableColumns";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columnsLength = columns.length - 1;

  const fetchProducts = async () => {
    try {
      axios
        .get("http://localhost:5555/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
      <div className="container mx-auto py-10">
        <div className="float-right pl-4">
          <Button className="mt-4 rounded-xl text-black bg-white border-black-500 border-2 hover:opacity-50 hover:text-black hover:bg-white">
            <Dialog>
              <DialogTrigger>Add new Product</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
