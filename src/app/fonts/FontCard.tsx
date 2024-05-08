"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const FontCard = () => {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <div className="space-y-3 ">
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="overflow-hidden shadow-lg rounded-2xl">
              <Image
                loader={() =>
                  `https://dummyjson.com/image/1080x1080/282828?text=Font+Example!&fontFamily=cookie`
                }
                src="/profile.png"
                width="250"
                height="250"
                alt="Picture of the author"
                className="w-full"
              />
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <ContextMenuItem>Add to Library</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  New Playlist
                </ContextMenuItem>
                <ContextMenuSeparator />
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Play Next</ContextMenuItem>
            <ContextMenuItem>Play Later</ContextMenuItem>
            <ContextMenuItem>Create Station</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Like</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <div className="space-y-1 flex flex-col items-center justify-center">
          <h3 className="font-medium text-md leading-none hover:underline">
            Font Name
          </h3>
          <h4 className="font-light text-sm leading-none">Font Name</h4>
          <p className="text-xs font-light text-muted-foreground">
            album.artist
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FontCard;
