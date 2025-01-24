import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function FindPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Find Job Descriptions</h2>
      <div className="max-w-2xl mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search job descriptions..." className="pl-8" />
          </div>
          <Button>Search</Button>
        </div>
      </div>
      <div className="text-muted-foreground text-center p-12">Enter a search term to find job descriptions</div>
    </div>
  )
}

