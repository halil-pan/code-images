import React, { useState } from "react";


import { Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import CodeHighlighter from "./CodeHighlighter"

export default function Dashboard() {
  const [code, setCode] = useState('')
  return (
    <>
      <div
        className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
      >
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Settings
            </legend>
            <div className="grid gap-3">
              <Label htmlFor="role">Language</Label>
              <Select defaultValue="system">
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">javascript</SelectItem>
                  <SelectItem value="typescript">typescript</SelectItem>
                  <SelectItem value="vue">vue</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Code</Label>
              <Textarea
                id="content"
                placeholder="Input your code here"
                className="min-h-[9.5rem]"
                value={code}
                onChange={e => setCode(e.target.value)}
              />
            </div>
          </fieldset>
        </form>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <Button
          variant="outline"
          size="sm"
          className="text-sm absolute right-3 top-3"
        >
          <Share className="size-3.5" />
          Share
        </Button>
        <CodeHighlighter className="w-full h-full" code={code} />
      </div>
    </>
  )
}
