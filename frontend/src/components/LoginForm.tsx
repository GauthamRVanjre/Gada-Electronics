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
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginFormSubmit = async () => {
    if (email.length === 0 || password.length === 0) {
      toast.error("Please enter email address and password");
      return;
    } else if (!email.includes("@gmail.com")) {
      toast.error("Please enter a valid email address");
      return;
    } else {
      toast.success("email and password are valid");
    }

    await axios
      .post("http://localhost:5555/users/login", {
        username: email,
        password,
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response: AxiosResponse) => {
        toast.success("Login successfull");
        navigate("/");
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
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your account by entering your email address and password
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">email address</Label>
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
        </CardContent>
        <CardFooter>
          <Button onClick={handleLoginFormSubmit}>Login</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
