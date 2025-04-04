import type { ReactNode } from "react"
import { Card } from "./card"

interface InfoCardProps {
  title: string
  icon: ReactNode
  children: ReactNode
  animationClass?: string
}

export function InfoCard({ title, icon, children, animationClass }: InfoCardProps) {
  return (
    <Card animationClass={animationClass}>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </Card>
  )
}

