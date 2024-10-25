import React, { useEffect, useState } from 'react'
import { ShikiTransformer, type BundledLanguage, type ThemeRegistrationRaw } from 'shiki'
import { bundledLanguages, createHighlighter, HighlighterGeneric, BundledTheme } from 'shiki'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel
} from '@shikijs/transformers'
import twLight from '../../lib/highlight-theme/tw-light.json'
import { cn } from '@/lib/utils'

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
      theme: theme || 'tw-light',
      transformers: [
        (transformerNotationDiff()) as ShikiTransformer,
        (transformerNotationHighlight()) as ShikiTransformer,
        (transformerNotationWordHighlight()) as ShikiTransformer,
        (transformerNotationFocus()) as ShikiTransformer,
        (transformerNotationErrorLevel()) as ShikiTransformer
      ]
    }))
  }, [code, language, theme, highlighter])
  return <div className={cn([className, `language-${language}`])} dangerouslySetInnerHTML={{ __html: html }} />
}
