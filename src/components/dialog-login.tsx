import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

import dynamic from "next/dynamic";
const GoogleIcon = dynamic(
  () => import("@/components/svg/Icon").then((mod) => mod.GoogleIcon),
  { ssr: false }
);
export function LoginDialog() {
  const [signUp, setSignUp] = useState("SignIn");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Login</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[340px] rounded-lg sm:max-w-[475px]">
        <DialogHeader>
          <ToggleGroup type="single" value={signUp}>
            <ToggleGroupItem
              value="SignIn"
              onClick={() => setSignUp("SignIn")}
              aria-label="Toggle Sign-In"
            >
              <span>Sign In</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="SignUp"
              onClick={() => setSignUp("SignUp")}
              aria-label="Toggle Sign-Up"
            >
              <span>Sign Up</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </DialogHeader>
        {/*  */}
        {signUp == "SignUp" ? (
          <div className="grid gap-4">
            <div className="grid gap-2 space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2 space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2 space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full space-x-2">
              <span>Sign Up with Google</span> <GoogleIcon />
            </Button>
          </div>
        ) : (
          <div>
            {" "}
            <div className="grid gap-4">
              <div className="grid gap-2 space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2 space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full space-x-2">
                <span>Login with Google</span> <GoogleIcon />
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                onClick={() => setSignUp("SignUp")}
                className="underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
