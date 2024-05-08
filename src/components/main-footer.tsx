"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function MainFooter() {
  return (
    <>
      <Separator />
      <div className="flex flex-col sm:flex-row justify-center items-center sm:px-24 py-4 gap-y-5">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <Link href="/">About</Link>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 mx-4 hidden sm:block"
        />
        <div className="flex flex-col w-1/3 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-x-2">
            <h1>Follow Us</h1>
            <ul className="flex flex-col gap-y-2 mt-2">
              <li>
                <Link className="flex gap-2" target="_blank" href="/">
                  <Instagram className="h-6 w-6" /> Instagram
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-2" target="_blank" href="/">
                  <Youtube className="h-6 w-6" /> Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="h-48 mx-4 hidden sm:block"
        />

        <div className="flex flex-col sm:flex-row gap-y-2 w-full max-w-sm items-center space-x-2 px-8 sm:px-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </>
  );
}
