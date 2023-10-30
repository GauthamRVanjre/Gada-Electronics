import { z } from "zod";

const ProductFormValidator = z.object({
  name: z.string().nonempty("name cannot be empty"),
  quantity: z.string().nonempty(),
  price: z.string().nonempty(),
  image: z.string().nonempty("image is required"),
  description: z.string(),
  category: z.string().nonempty("category is required"),
});

export default ProductFormValidator;
