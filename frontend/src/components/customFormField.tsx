import { Input } from "./ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";

import React from "react";

interface customFormFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  formLabel: string;
  placeholder: string;
  fieldType: string;
}

const CustomFormField: React.FC<customFormFieldProps> = ({
  control,
  name,
  formLabel,
  placeholder,
  fieldType,
}) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{formLabel}</FormLabel>
            <FormControl>
              <Input
                className="ml-1 w-[300px]"
                placeholder={placeholder}
                type={fieldType}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomFormField;
