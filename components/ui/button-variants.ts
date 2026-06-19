import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a1045] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-purple-600 text-white hover:bg-purple-500",
        destructive: "bg-red-600 text-white hover:bg-red-500",
        outline:
          "border border-purple-400/40 hover:bg-purple-800/50 hover:text-purple-50",
        secondary: "bg-purple-800 text-purple-100 hover:bg-purple-700",
        ghost: "hover:bg-purple-800/60 hover:text-purple-50",
        link: "underline-offset-4 hover:underline text-amber-300",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
