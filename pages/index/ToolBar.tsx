import React, { useState } from "react";
import { Share, Copy, Loader2 } from "lucide-react"
import html2canvas from 'html2canvas'
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ToolBar() {
  async function codeToCanvas() {
    const codeElement = document.querySelector(".shiki code") as HTMLElement;
    return codeElement && await html2canvas(codeElement, {
      width: codeElement.getBoundingClientRect().width + 24,
      height: codeElement.getBoundingClientRect().height + 24,
      x: -12,
      y: -12,
    })
  }
  const { toast } = useToast()
  const [isExporting, setIsExporting] = useState(false)
  function exportCodeImage() {
    setIsExporting(true)
    setTimeout(() => {
      codeToCanvas().then(canvas => {
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
        const image = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.setAttribute('download', `code-image-${Date.now()}.png`)
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
        toast({ description: "Exported successfully" })
      }).finally(() => {
        setIsExporting(false)
      })
    }, 300)
  }
  const [isCopying, setIsCopying] = useState(false)
  function copyCodeImage() {
    setIsCopying(true)
    setTimeout(() => {
      codeToCanvas().then(canvas => canvas.toBlob(function (blob) {
        if (blob) {
          const item = new ClipboardItem({ 'image/png': blob })
          navigator.clipboard.write([item])
          toast({ description: "Copied successfully" })
        }
      })).finally(() => {
        setIsCopying(false)
      })
    }, 300);
  }
  return (
    <div className="absolute right-5 top-5">
      <Button
        variant="outline"
        size="sm"
        className="text-sm opacity-50 hover:opacity-100 mr-2"
        disabled={isCopying}
        onClick={copyCodeImage}
      >
        {
          isCopying ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Copy className="size-3.5 mr-2" />
        }
        Copy
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="text-sm opacity-50 hover:opacity-100"
        disabled={isExporting}
        onClick={exportCodeImage}
      >
        {
          isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Share className="size-3.5 mr-2" />
        }
        Export
      </Button>
    </div>
  )
}