import React from "react";
import { BundledLanguage } from "shiki"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { languages } from "./CodeHighlighter"
import ToolBar from "./ToolBar";

export default function SettingForm({
  theme,
  setTheme,
  language,
  setLanguage,
  code,
  setCode
}: {
  theme: string;
  language: string;
  code: string;
  setTheme: (val: string) => void;
  setLanguage: (val: BundledLanguage) => void;
  setCode: (val: string) => void;
}) {
  return (
    <div
      className="relative hidden flex-col items-start gap-4 md:flex" x-chunk="dashboard-03-chunk-0"
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
      <ToolBar />
    </div>
  )
}