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

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginFormSubmit = () => {
    if (username.length === 0 || password.length === 0) {
      toast.error("Please enter username address and password");
      return;
    } else if (!username.includes("@gmail.com")) {
      toast.error("Please enter a valid username address");
      return;
    } else {
      toast.success("username and password are valid");
    }

    console.log("username and password are", username, password);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your account by entering your username address and password
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="username">username address</Label>
            <Input
              id="username"
              type="username"
              onChange={(e) => setusername(e.target.value)}
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
          <Button onClick={handleLoginFormSubmit}>Login</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
