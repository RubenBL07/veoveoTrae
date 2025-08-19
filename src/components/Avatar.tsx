import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
  className?: string;
}

export const Avatar = ({ src, alt, size = "md", fallback, className }: AvatarProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base"
  };

  const getInitials = (name?: string) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
      sizeClasses[size],
      className
    )}>
      {src ? (
        <img
          className="aspect-square h-full w-full object-cover"
          alt={alt || "Avatar"}
          src={src}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted font-medium text-muted-foreground">
          {getInitials(fallback || alt)}
        </div>
      )}
    </div>
  );
};