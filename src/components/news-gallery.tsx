"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface Gallery {
  title: string;
  description: string;
  cover: string;
  datepost: string;
}
interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  gallery: Gallery;
  aspectRatio?: "portrait" | "square";
}
export function GalleryNews({
  gallery,
  aspectRatio = "portrait",
}: GalleryProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex lg:space-x-2 flex-col lg:flex-row shadow-md dark:border-white h-full dark:border-b-2 p-2 lg:p-4 rounded-xl">
      <div className="w-full lg:w-1/3 rounded-xl flex justify-center items-center">
        <Image
          src={`${gallery.cover}`}
          alt={gallery.title}
          width={480}
          height={720}
          className={cn(
            "overflow-hidden rounded-md object-cover transition-all hover:scale-105",
            aspectRatio === "square" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="w-full mt-2 lg:w-2/3 rounded-xl flex flex-col justify-start items-start">
        <div className="flex lg:flex-col lg:justify-start lg:items-start justify-between items-center w-full">
          <h2 className="font-medium text-2xl leading-none hover:underline mb-2">
            {gallery.title}
          </h2>
          <span className="font-light text-sm text-muted-foreground">
            {gallery.datepost}
          </span>
        </div>
        <p className="text-md font-normal text-justify">
          {expanded ? gallery.description : gallery.description.slice(0, 700)}
          {gallery.description.length > 700 && !expanded && (
            <span className="text-blue-500 cursor-pointer"> ....read more</span>
          )}
        </p>
      </div>
    </div>
  );
}
