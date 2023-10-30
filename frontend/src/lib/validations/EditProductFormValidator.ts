import * as z from "zod";

const editProductFormValidator = z.object({
  price: z.string().nonempty("price is required"),
  quantity: z.string().nonempty("quantity is required"),
});

export default editProductFormValidator;
