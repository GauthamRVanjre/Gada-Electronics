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

import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "@/context/userContext";
const baseURL = import.meta.env.VITE_BASE_URL;

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // context user
  const { login } = useContext(UserContext);

  const handleLoginFormSubmit = async () => {
    if (email.length === 0 || password.length === 0 || username.length === 0) {
      toast.error("Please enter email address, password or username");
      return;
    } else if (!email.includes("@gmail.com")) {
      toast.error("Please enter a valid email address");
      return;
    } else {
      toast.success("email and password are valid");
    }
    setLoading(true);
    await axios
      .post(`${baseURL}/users/login`, {
        username,
        password,
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response: AxiosResponse) => {
        toast.success("Login successfull");
        console.log(response.data.user);
        login(response.data.user);
        navigate("/");
      })
      .catch((error: { response: { data: { message: string } } }) => {
        toast.error(error.response.data.message);
        console.log(error.response?.data.message);
      });
    setLoading(false);
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
          {loading ? (
            <Button disabled>Please wait...</Button>
          ) : (
            <Button onClick={handleLoginFormSubmit}>Login</Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
