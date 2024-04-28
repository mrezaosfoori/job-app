"use client"

import { Loader2 } from 'lucide-react'
import { HtmlProps } from 'next/dist/shared/lib/html-context.shared-runtime'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import LoadingButton from './LoadingButton'

const FormSubmitButton = (props:React.ButtonHTMLAttributes<HTMLButtonElement>) => {

    const {pending}=useFormStatus();
  return (
    <LoadingButton type='submit' {...props} loading={ pending}/>
  )
}

export default FormSubmitButton
