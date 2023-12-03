import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import EditProductTableForm from "./EditProductTableForm";
import { productTypes } from "@/lib/types/product";
import DeleteProductDialog from "./DeleteProductDialog";

export const columns: ColumnDef<productTypes>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "image",
    header: () => <div>image</div>,
    cell: ({ row }) => {
      return (
        <img
          className="w-20 h-20 object-cover lg:h-40 lg:w-40"
          src={row.original.image}
          alt="product image"
        />
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "quantity",
  },
  {
    accessorKey: "price",
    header: () => <div>Price</div>,
    cell: ({ row }) => {
      const price = row.original.price;
      return <div>₹ {price}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex flex-row gap-4 w-[210px]">
          <EditProductTableForm product={row.original} />
          <DeleteProductDialog product={row.original} />
        </div>
      );
    },
  },
];
