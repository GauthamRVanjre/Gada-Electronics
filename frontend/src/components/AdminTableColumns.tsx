import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";

export type Admin = {
  id: string;
  name: string;
  quantity: string;
  image: string;
  price: string;
};

export const columns: ColumnDef<Admin>[] = [
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
          className="h-32 w-32 sm:h-24 sm:w-24 "
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
      return <div>Actions - {row.id}</div>;
    },
  },
];
