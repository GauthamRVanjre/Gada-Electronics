import { productTypes } from "@/lib/types/product";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Form } from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import editProductFormValidator from "@/lib/validations/EditProductFormValidator";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import CustomFormField from "./customFormField";

interface EditProductTableFormProps {
  product: productTypes;
}

const EditProductTableForm: React.FC<EditProductTableFormProps> = ({
  product,
}) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof editProductFormValidator>>({
    defaultValues: {
      price: product.price,
      quantity: product.quantity,
    },
    resolver: zodResolver(editProductFormValidator),
  });

  async function onSubmit(values: z.infer<typeof editProductFormValidator>) {
    console.log(values);
    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:5555/products/${product._id}`,
        {
          quantity: values.quantity,
          price: values.price,
        }
      );

      if (response.status === 200) {
        toast.success("Product added successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      DialogClose;
      form.reset();
      setLoading(false);
      window.location.reload();
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="text-black bg-white border-black-500 border-2 hover:opacity-50 hover:text-black hover:bg-white">
            Edit product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pl-2">Add new Product</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 overflow-y-auto h-[400px]"
            >
              <CustomFormField
                control={form.control}
                name="quantity"
                formLabel="Enter Product quantity"
                placeholder="quantity"
                fieldType="number"
              />

              <CustomFormField
                control={form.control}
                name="price"
                formLabel="Enter Product price"
                placeholder="price"
                fieldType="number"
              />

              <Button disabled={loading} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProductTableForm;
