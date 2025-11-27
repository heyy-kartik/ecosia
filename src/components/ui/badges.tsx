import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-medium rounded-md shadow-md backdrop-blur-md transition-all select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-white/20 to-white/5 text-white hover:from-white/30 hover:to-white/10",
        secondary:
          "bg-gradient-to-br from-gray-300/20 to-gray-500/10 text-gray-100 hover:from-gray-300/30",
        success:
          "bg-gradient-to-br from-green-400/25 to-green-600/20 text-green-50 hover:from-green-400/35",
        warning:
          "bg-gradient-to-br from-yellow-400/25 to-yellow-600/20 text-yellow-50 hover:from-yellow-400/35",
        destructive:
          "bg-gradient-to-br from-red-400/25 to-red-600/20 text-red-50 hover:from-red-400/35",
        outline:
          "border border-white/20 text-white bg-white/5 hover:bg-white/10",
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

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { badgeVariants }