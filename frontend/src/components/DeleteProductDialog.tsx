import { productTypes } from "@/lib/types/product";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
const baseURL = import.meta.env.VITE_BASE_URL;

interface DeleteProductDialogProps {
  product: productTypes;
}

const DeleteProductDialog: React.FC<DeleteProductDialogProps> = ({
  product,
}) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${baseURL}/products/${product._id}`);

      if (response.status === 200) {
        toast.success("product deleted forever!");
      }
    } catch (error) {
      toast.error("could not delete product");
    }
    window.location.reload();
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="text-white bg-black">Delete product</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              {product.name} from database and cannot be undone
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteProductDialog;
