import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageViewerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fullSrc?: string;
}

export function ImageViewer({ className, src, fullSrc, alt, ...props }: ImageViewerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className={cn(
            "cursor-zoom-in transition-transform hover:scale-105",
            className
          )}
          {...props}
        />
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg w-fit">
        <img
          src={fullSrc || src}
          alt={alt}
          className="w-auto max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
