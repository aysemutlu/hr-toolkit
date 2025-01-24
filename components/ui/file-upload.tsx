"use client"

import * as React from "react"
import { useDropzone } from "react-dropzone"
import { Upload, File, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface FileUploadProps {
  onFileSelect: (file: File) => Promise<void>
  accept?: Record<string, string[]>
}

export function FileUpload({ onFileSelect, accept }: FileUploadProps) {
  const [file, setFile] = React.useState<File | null>(null)
  const [uploading, setUploading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  const onDrop = React.useCallback(
    async (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0]
      if (selectedFile) {
        setFile(selectedFile)
        setUploading(true)
        setProgress(0)

        try {
          // Simulate upload progress
          for (let i = 0; i <= 100; i += 10) {
            await new Promise((resolve) => setTimeout(resolve, 200))
            setProgress(i)
          }

          await onFileSelect(selectedFile)
        } catch (error) {
          console.error("Upload failed:", error)
        } finally {
          setUploading(false)
        }
      }
    },
    [onFileSelect],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  })

  const removeFile = () => {
    setFile(null)
    setProgress(0)
  }

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          isDragActive ? "border-primary bg-primary/5" : "border-muted"
        } ${file ? "border-success bg-success/5" : ""}`}
      >
        <input {...getInputProps()} />
        {!file && (
          <>
            <div className="mx-auto w-12 h-12 rounded-lg border-2 border-dashed flex items-center justify-center mb-4">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium mb-1">
              {isDragActive ? "Drop your file here" : "Drag and drop your document here"}
            </p>
            <p className="text-sm text-muted-foreground">or click to browse your files</p>
          </>
        )}

        {file && !uploading && (
          <div className="flex items-center justify-center gap-4">
            <File className="h-6 w-6 text-success" />
            <span className="text-sm font-medium">{file.name}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation()
                removeFile()
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {uploading && (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="text-sm font-medium">Uploading...</span>
            </div>
            <Progress value={progress} className="w-[60%] mx-auto" />
          </div>
        )}
      </div>
    </div>
  )
}

