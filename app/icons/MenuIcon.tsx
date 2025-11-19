import * as React from "react"
import { cn } from "@/lib/utils"
import { menuIconConfig } from "@/config/icons"

export interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function MenuIcon({ size = 24, className, ...props }: MenuIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={menuIconConfig.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      {menuIconConfig.paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          fill={path.fill}
          opacity={path.opacity}
          fillRule={path.fillRule}
          clipRule={path.clipRule}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
          strokeLinecap={path.strokeLinecap}
        />
      ))}
    </svg>
  )
}
