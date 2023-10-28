import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AddProductTableForm = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Add new Product</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pl-2">Add new Product</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProductTableForm;
