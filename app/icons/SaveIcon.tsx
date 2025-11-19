import * as React from "react"
import { cn } from "@/lib/utils"
import { saveIconConfig } from "@/config/icons"

export interface SaveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function SaveIcon({ size = 24, className, ...props }: SaveIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={saveIconConfig.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      {saveIconConfig.paths.map((path, index) => (
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
