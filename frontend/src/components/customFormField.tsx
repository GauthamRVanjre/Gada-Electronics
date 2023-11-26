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
              {fieldType === "number" ? (
                <Input
                  className="ml-1 w-[300px]"
                  placeholder={placeholder}
                  type={fieldType}
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                      field.onChange(0);
                    } else if (Number.isNaN(Number(value))) {
                      field.onChange(0);
                    } else {
                      field.onChange(Number(value));
                    }
                  }}
                />
              ) : (
                <Input
                  className="ml-1 w-[300px]"
                  placeholder={placeholder}
                  type={fieldType}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomFormField;
