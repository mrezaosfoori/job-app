import React from 'react'
import { cn } from '@/src/utils'

const H1 = (props:React.HTMLProps<HTMLHeadingElement>) => {
  return (
      <h1 {...props} className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl",props.className)} />
  )
}

export default H1
 