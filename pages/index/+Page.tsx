import React, { useState } from "react";
import { BundledLanguage } from "shiki"
import CodeHighlighter from "./CodeHighlighter"
import SettingForm from "./SettingForm";
import ToolBar from "./ToolBar";

export default function Dashboard() {
  const [code, setCode] = useState('// Paste your code to here')
  const [theme, setTheme] = useState('tw-light')
  const [language, setLanguage] = useState<BundledLanguage>('javascript')

  return (
    <>
      <SettingForm
        theme={theme}
        language={language}
        code={code}
        setTheme={setTheme}
        setLanguage={setLanguage}
        setCode={setCode}
      />
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <ToolBar />
        <CodeHighlighter className="w-full h-full" code={code} language={language} theme={theme} />
      </div>
    </>
  )
}
