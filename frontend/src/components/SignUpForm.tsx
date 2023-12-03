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
import axios, { AxiosResponse } from "axios";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");

  const handleLoginFormSubmit = async () => {
    if (email.length === 0 || password.length === 0 || username.length === 0) {
      toast.error("Please enter email address, password or username");
      return;
    } else if (!email.includes("@gmail.com")) {
      toast.error("Please enter a valid email address");
      return;
    } else if (password.includes(" ")) {
      toast.error("password cannot contain spaces");
      return;
    } else if (password.length < 5) {
      toast.error("password must be at least 5 characters");
      return;
    } else {
      toast.success("email and password are valid");
    }

    await axios
      .post("http://localhost:5555/users/register", {
        username,
        email,
        password,
        adminCode,
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response: AxiosResponse) => {
        toast.success("Sign up successfull");
        setAdminCode("");
        setUsername("");
        setPassword("");
        setemail("");
      })
      .catch((error: { response: { data: { message: string } } }) => {
        toast.error(error.response.data.message);
        console.log(error.response?.data.message);
      });
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
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
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
          <div className="space-y-1">
            <Label htmlFor="password">Admin Code</Label>
            <Input
              id="adminCode"
              onChange={(e) => setAdminCode(e.target.value)}
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
