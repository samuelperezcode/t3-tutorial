'use client'

import { useRouter } from "next/navigation"
import { UploadDropzone } from "~/utils/uploadthing"

export function ImageUploader() {
  const router = useRouter()
  return (
    <UploadDropzone endpoint="imageUploader" onClientUploadComplete={() => {
      router.refresh()    
    }} />
  )
}
