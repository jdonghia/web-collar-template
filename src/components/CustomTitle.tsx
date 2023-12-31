import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface Props extends ComponentProps<"p"> {
  text: string;
}

export function CustomTitle({ text, className }: Props) {
  return (
    <p
      className={twMerge(
        "flex items-center gap-2 font-inter text-white",
        className,
      )}
    >
      <span className="block h-3 w-3 bg-custom-blue"></span>
      {text}
    </p>
  );
}
