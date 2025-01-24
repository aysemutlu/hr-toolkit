import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample apps data - you can modify this as needed
const apps = [
  { id: 1, name: "Contract Review", icon: "📄" },
  { id: 2, name: "HR Toolkit", icon: "📋" },
  { id: 3, name: "Legal Assistant", icon: "⚖️" },
  { id: 4, name: "Document Analysis", icon: "🔍" },
  { id: 5, name: "Policy Generator", icon: "📝" },
  { id: 6, name: "Compliance Check", icon: "✅" },
  { id: 7, name: "Case Research", icon: "📚" },
  { id: 8, name: "Meeting Minutes", icon: "🗒️" },
  { id: 9, name: "Email Drafts", icon: "📧" },
  { id: 10, name: "Risk Assessment", icon: "⚠️" },
]

export function Sidebar() {
  return (
    <div className="w-60 border-r h-screen flex flex-col">
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 p-2">
          <div className="bg-neutral-900 text-white p-2 rounded-lg">
            <div className="text-xs">JUSTICE</div>
            <div className="text-2xl font-bold">AI</div>
          </div>
        </div>

        <div className="text-sm font-medium text-muted-foreground">APPS</div>

        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 p-2">
          {apps.map((app) => (
            <Button
              key={app.id}
              variant="ghost"
              className={`w-full justify-start ${app.name === "HR Toolkit" ? "bg-muted/50" : ""}`}
            >
              <div className="flex items-center gap-2">
                <div className="p-1">{app.icon}</div>
                <span className="truncate">{app.name}</span>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 mt-auto">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="p-1">➕</div>
            Add New App
          </div>
        </Button>
      </div>
    </div>
  )
}

