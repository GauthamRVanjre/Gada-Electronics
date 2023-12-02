import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import React from "react";

const SignUpForm = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Sign Up your account, to order products from our website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Sign Up</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignUpForm;
