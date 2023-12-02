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

import { useState } from "react";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginFormSubmit = () => {
    if (email.length === 0 || password.length === 0) {
      toast.error("Please enter email address and password");
    } else if (!email.includes("@gmail.com")) {
      toast.error("Please enter a valid email address");
    } else if (password.includes(" ")) {
      toast.error("password cannot contain spaces");
    } else if (password.length < 5) {
      toast.error("password must be at least 5 characters");
    } else {
      toast.success("email and password are valid");
    }
  };

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
            <Input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLoginFormSubmit}>Sign Up</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignUpForm;
