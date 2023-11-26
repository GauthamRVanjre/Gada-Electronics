import * as z from "zod";

const editProductFormValidator = z.object({
  price: z.number(),
  quantity: z.number(),
});

export default editProductFormValidator;
