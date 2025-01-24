import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Welcome to HR Toolkit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Find Jobs</CardTitle>
            <CardDescription>Search and browse job descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Access our database of job descriptions and templates to find the perfect match for your needs.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create Descriptions</CardTitle>
            <CardDescription>Generate professional job descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use AI-powered tools to create comprehensive and accurate job descriptions quickly.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Evaluate Content</CardTitle>
            <CardDescription>Review and analyze job descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get insights and suggestions to improve your job descriptions for better results.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

