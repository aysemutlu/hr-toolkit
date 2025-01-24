"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Find", href: "/find" },
  { name: "Create", href: "/create" },
  { name: "Evaluate", href: "/evaluate" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-semibold">
            HR Toolkit <span className="text-muted-foreground">📋</span>
          </h1>
          <nav className="flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "hover:text-foreground",
                  pathname === item.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/faqs" className="text-muted-foreground hover:text-foreground">
            FAQs
          </Link>
          <Link href="/docs" className="text-muted-foreground hover:text-foreground">
            Docs
          </Link>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

