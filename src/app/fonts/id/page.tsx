"use client";
import React, { useState, useEffect, useRef } from "react";
import localFont from "next/font/local";
import { LicenseTable } from "./LicenseTable";
import Link from "next/link";

import Image from "next/image";
import { ChevronLeft, Grip } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const littlepat = localFont({
  src: [
    {
      path: "../../../../public/fonts/SomethingintheCloud.ttf",
      weight: "400",
    },
  ],
  variable: "--font-littlepat",
});
const Page = () => {
  const [trialText, setTrialText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  );
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = ` ${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
  }, []);

  return (
    <div className="mx-auto grid w-full flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        {/* <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Back
        </h1> */}
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button size="sm" color="success">
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>Font Names</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Image
                  loader={() =>
                    `https://dummyjson.com/image/1080x1080/282828&text=Main+Product`
                  }
                  src="/profile.png"
                  width="300"
                  height="300"
                  alt="Picture of the author"
                  className="w-full"
                />
                <div className="grid grid-cols-3 gap-2">
                  <button>
                    <Image
                      loader={() =>
                        `https://dummyjson.com/image/1080x1080/282828&text=Main+Product`
                      }
                      src="/profile.png"
                      width="300"
                      height="300"
                      alt="Picture of the author"
                      className="w-full"
                    />
                  </button>
                  <button>
                    <Image
                      loader={() =>
                        `https://dummyjson.com/image/1080x1080/282828&text=Main+Product`
                      }
                      src="/profile.png"
                      width="300"
                      height="300"
                      alt="Picture of the author"
                      className="w-full"
                    />
                  </button>
                  <button className="flex bg-[url('https://dummyjson.com/image/1080x1080/282828&text=Main+Product')] bg-cover aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Grip className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Other</span>
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                vel eum voluptatibus ipsum sint repellat? Quaerat nemo optio
                alias nam.
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8 ">
          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>License</CardTitle>
              <CardDescription>
                Choose licenses based on your needs, you can check license
                details{" "}
                <Link
                  href="/license"
                  target="_blank"
                  className="text-muted-foreground transition-colors hover:text-foreground underline"
                >
                  here
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LicenseTable />
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle className="text-center text-xl">Try Font!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <textarea
                    id="description"
                    value={trialText}
                    ref={textAreaRef}
                    spellCheck={false}
                    className={`resize-none bg-transparent text-justify overflow-hidden w-full border-none px-4 focus:outline-none border-transparent break-words sm:text-3xl text-2xl ${littlepat.className}`}
                    rows={1}
                    onChange={(event) => {
                      setTrialText(event.target.value);
                      resizeTextArea();
                    }}
                  />
                </div>
                {/* PLace For bold italic etc */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Add To Cart</Button>
      </div>
    </div>
  );
};
export default Page;
