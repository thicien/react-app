import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import cn from "../util/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

export default function Button({children, className, variant, size,  ...props}: ButtonProps) {
    return (
        <button className={cn(buttonVariants({variant, size, className}))} {...props} >{children}
        </button>
    )
}

const buttonVariants = cva('rounded-md', {
    variants: {
        variant: {
            primary: "border-3 bg-blue text-white border-blue-600",
            secondary: "border-4 border-black-500 bg-black text-white hover:scale-90",
            danger: "border-none text-white bg-red-500 hover:bg-red--600"
        }, 
        size: {
            sm: "text-sm px-1 py-1",
            md: "text-md px-2 py-2",
            lg: "text-xl px-3 py-3"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    },
})