import React, { useState } from "react";
import { BundledLanguage } from "shiki"
import CodeHighlighter from "./CodeHighlighter"
import SettingForm from "./SettingForm";

const defaultCode = `console.log('hewwo') // [!code --]
console.log('hello') // [!code ++]
console.log('goodbye')

console.log('Not highlighted')
console.log('Highlighted') // [!code highlight]
console.log('Not highlighted')

// [!code word:Hello]
const message = 'Hello World'
console.log(message) // prints Hello World

console.log('No errors or warnings')
console.error('Error') // [!code error]
console.warn('Warning') // [!code warning]`;

export default function Dashboard() {
  const [code, setCode] = useState(defaultCode)
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
      <div className="relative flex h-full min-h-[50vh] flex-col p-2 lg:col-span-2">
        <CodeHighlighter className="w-full h-full border rounded-xl p-1" code={code} language={language} theme={theme} />
      </div>
    </>
  )
}
