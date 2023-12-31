import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ProductFormValidator from "@/lib/validations/productFormValidator";
import { Button } from "./ui/button";
import CustomFormField from "./customFormField";
import { ScrollArea } from "./ui/scroll-area";
import axios from "axios";
import toast from "react-hot-toast";
const baseURL = import.meta.env.VITE_BASE_URL;

const AddProductTableForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof ProductFormValidator>>({
    defaultValues: {
      name: "",
      price: "",
      quantity: "",
      description: "",
      image: "",
      category: "",
    },
    resolver: zodResolver(ProductFormValidator),
  });

  const productCategories = [
    "smartphones",
    "laptops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
  ];

  async function onSubmit(values: z.infer<typeof ProductFormValidator>) {
    console.log(values);
    setLoading(true);

    try {
      const response = await axios.post(`${baseURL}/products`, {
        name: values.name,
        quantity: values.quantity,
        price: values.price,
        image: values.image,
        description: values.description,
        category: values.category,
      });

      if (response.status === 200) {
        toast.success("Product added successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      form.reset();
      setLoading(false);
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>Add new Product</DialogTrigger>
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
                name="name"
                fieldType="text"
                formLabel="Enter Product name"
                placeholder="name..."
              />

              <CustomFormField
                control={form.control}
                name="quantity"
                formLabel="Enter Product quantity"
                placeholder="quantity"
                fieldType="text"
              />

              <CustomFormField
                control={form.control}
                name="price"
                formLabel="Enter Product price"
                placeholder="price"
                fieldType="text"
              />

              <CustomFormField
                control={form.control}
                name="image"
                formLabel="Enter Product image (enter hosted web url)"
                placeholder="image"
                fieldType="text"
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Select a product category</FormLabel>
                    <FormControl>
                      <div>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-[300px] ml-1">
                            <SelectValue placeholder="Select your product category" />
                          </SelectTrigger>
                          <SelectContent>
                            <ScrollArea className="h-[200px] w-[300px] ml-1">
                              <SelectGroup>
                                <SelectLabel>Product categories</SelectLabel>
                                {productCategories.map((product) => {
                                  return (
                                    <SelectItem key={product} value={product}>
                                      {product}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <CustomFormField
                control={form.control}
                name="description"
                formLabel="Enter Product description"
                placeholder="description"
                fieldType="text"
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

export default AddProductTableForm;
