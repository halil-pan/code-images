import React, { useEffect, useState } from 'react'
import { type BundledLanguage, type ThemeRegistrationRaw } from 'shiki'
import { bundledLanguages, createHighlighter, HighlighterGeneric, BundledTheme } from 'shiki'
import twLight from '../../lib/highlight-theme/tw-light.json'

interface CodeHighlighterProps {
  code: string;
  className: string;
  language?: BundledLanguage
  theme?: string;
}

export const languages = Object.keys(bundledLanguages) as BundledLanguage[]

export default function CodeHighlighter({ code, language, theme, className }: CodeHighlighterProps) {
  const [html, setHtml] = useState('')
  const [highlighter, setHighlighter] = useState<HighlighterGeneric<BundledLanguage, BundledTheme>>()

  useEffect(() => {
    createHighlighter({
      themes: [twLight as unknown as ThemeRegistrationRaw],
      langs: languages,
    }).then(setHighlighter)
  }, [])

  useEffect(() => {
    if (!highlighter) {
      return;
    }
    setHtml(highlighter.codeToHtml(code, {
      lang: language || 'javascript',
      theme: theme || 'tw-light'
    }))
  }, [code, language, theme, highlighter])
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
