import * as React from "react"
import { cn } from "@/lib/utils"
import { loadingIconConfig } from "@/config/icons"

export interface LoadingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function LoadingIcon({ size = 24, className, ...props }: LoadingIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={loadingIconConfig.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      {loadingIconConfig.paths.map((path, index) => (
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
