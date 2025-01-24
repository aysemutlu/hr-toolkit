import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EvaluatePage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Evaluate Job Descriptions</h2>
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Upload for Evaluation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed rounded-lg p-12 text-center">
            <div className="mx-auto w-12 h-12 rounded-lg border-2 border-dashed flex items-center justify-center mb-4">
              <span className="text-2xl">+</span>
            </div>
            <p className="text-sm font-medium mb-1">Drag and drop your job description here</p>
            <p className="text-sm text-muted-foreground mb-4">or click to browse your files</p>
            <Button variant="outline">Upload File</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

