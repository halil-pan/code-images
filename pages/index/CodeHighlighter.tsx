import React, { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki'

interface CodeHighlighterProps {
  code: string;
  className: string;
}

export default function CodeHighlighter({ code, className }: CodeHighlighterProps) {
  const [html, setHtml] = useState('')
  useEffect(() => {
    codeToHtml(code, {
      lang: 'javascript',
      theme: 'vitesse-light'
    }).then(html => {
      setHtml(html)
    })
  }, [code])
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
