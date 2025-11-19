import * as React from "react"
import { cn } from "@/lib/utils"
import { cancelIconConfig } from "@/config/icons"

export interface CancelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function CancelIcon({ size = 24, className, ...props }: CancelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={cancelIconConfig.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      {cancelIconConfig.paths.map((path, index) => (
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
