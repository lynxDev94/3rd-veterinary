'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 18 })

  return (
    <div className={cn('[perspective:1000px]', className)}>
      <motion.div
        onPointerMove={(e) => {
          if (e.pointerType !== 'mouse') return
          const rect = e.currentTarget.getBoundingClientRect()
          x.set((e.clientX - rect.left) / rect.width - 0.5)
          y.set((e.clientY - rect.top) / rect.height - 0.5)
        }}
        onPointerLeave={() => {
          x.set(0)
          y.set(0)
        }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
