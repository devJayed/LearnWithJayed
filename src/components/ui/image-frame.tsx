import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function ImageFrame({ src, alt, className, imageClassName }: ImageFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-contain", imageClassName)}
        loading="lazy"
      />
    </div>
  );
}
