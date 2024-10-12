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
import CodeHighlighter, { languages } from "./CodeHighlighter"
import { BundledLanguage } from "shiki"
import html2canvas from 'html2canvas'

export default function Dashboard() {
  const [code, setCode] = useState('// Copy your code to here')
  const [theme, setTheme] = useState('tw-light')
  const [language, setLanguage] = useState<BundledLanguage>('javascript')
  function exportCodeImage() {
    const codeElement = document.querySelector(".shiki code") as HTMLElement;
    codeElement && html2canvas(codeElement, {
      width: codeElement.getBoundingClientRect().width + 24,
      height: codeElement.getBoundingClientRect().height + 24,
      x: -12,
      y: -12,
    }).then(canvas => {
      canvas.style.display = 'none'
      document.body.appendChild(canvas)
      const image = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      a.setAttribute('download', `code-image-${Date.now()}.png`)
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
    });
  }
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
              <Label htmlFor="role">Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tw-light">tw-light</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="role">Language</Label>
              <Select value={language} onValueChange={value => setLanguage(value as BundledLanguage)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(lang => (
                    <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                  ))}
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
          className="text-sm absolute right-5 top-5 opacity-50 hover:opacity-100"
          onClick={exportCodeImage}
        >
          <Share className="size-3.5" />
          Share
        </Button>
        <CodeHighlighter className="w-full h-full" code={code} language={language} theme={theme} />
      </div>
    </>
  )
}
