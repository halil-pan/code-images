import "./style.css";
import "./tailwind.css";
import React from "react";
import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="Playground"
              >
                <SquareTerminal className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Playground
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg"
          aria-label="Models"
        >
          <Bot className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg"
          aria-label="API"
        >
          <Code2 className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg"
          aria-label="Documentation"
        >
          <Book className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg"
          aria-label="Settings"
        >
          <Settings2 className="size-5" />
        </Button>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Help"
        >
          <LifeBuoy className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Account"
        >
          <SquareUser className="size-5" />
        </Button>
      </nav>
    </aside>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold mr-1">Code Images</h1>
      <Badge variant="outline">tw style</Badge>
    </header>
  );
}
