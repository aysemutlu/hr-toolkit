import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HR Toolkit",
  description: "AI-powered HR toolkit for managing job descriptions and more",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'