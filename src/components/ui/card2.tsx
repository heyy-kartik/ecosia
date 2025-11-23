import * as React from "react"
import { cn } from "@/lib/utils"

const Card2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-white/5 backdrop-blur-xl text-white shadow-lg hover:shadow-xl transition-all border-none",
        className
      )}
      {...props}
    />
  )
)
Card2.displayName = "Card2"

const Card2Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 bg-white/10 rounded-lg backdrop-blur-md shadow-sm", className)}
    {...props}
  />
))
Card2Header.displayName = "Card2Header"

const Card2Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight text-white", className)}
    {...props}
  />
))
Card2Title.displayName = "Card2Title"

const Card2Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-300", className)}
    {...props}
  />
))
Card2Description.displayName = "Card2Description"

const Card2Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 bg-white/5 rounded-lg backdrop-blur-md shadow-sm", className)} {...props} />
))
Card2Content.displayName = "Card2Content"

const Card2Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0 bg-white/5 rounded-lg backdrop-blur-md shadow-sm", className)} {...props} />
))
Card2Footer.displayName = "Card2Footer"

export {
  Card2,
  Card2Header,
  Card2Title,
  Card2Description,
  Card2Content,
  Card2Footer,
}