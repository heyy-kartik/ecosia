import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm transition-all border-none bg-white/10 text-white",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-white hover:bg-white/20",
        secondary: "bg-white/5 text-gray-200 hover:bg-white/15",
        destructive: "bg-red-500/20 text-red-200 hover:bg-red-500/30",
        outline: "bg-transparent text-white border border-white/20 hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }