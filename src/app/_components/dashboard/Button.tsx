"use client"

import React, { ButtonHTMLAttributes } from 'react'
import { VariantProps, cva } from "class-variance-authority";
import { TbLoader2 } from 'react-icons/tb';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof customBtn> {
  isLoading?: boolean,
  startIcon?: React.ReactElement,
  endIcon?: React.ReactElement,
}

const customBtn = cva(
  "relative flex justify-center items-center whitespace-nowrap gap-2.5 rounded-40 disabled:opacity-70 disabled:cursor-not-allowed transition",
  {
    variants: {
      variant: {
        primary: "bg-[#EFECFF] text-primary",
        outline: "border-stock text-white rounded-[30px]",
        filled: "bg-[#6850FF] text-white border-transparent"
      },
      size: {
        md: "py-4 px-10 text-base font-medium border",
        sm: "py-2 px-2 text-sm font-light border",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

const Button: React.FC<ButtonProps> = ({ className, children, variant, size, isLoading, startIcon, endIcon, ...props }) => {
  return (
    <button className={`${customBtn({ variant, size, className })}`} disabled={isLoading} {...props}>
      {isLoading && <TbLoader2 className={`mr-2 animate-spin ${size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5"}`} />}
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  )
}

export default Button