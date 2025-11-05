'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import NProgress from 'nprogress'

// Optional: configure NProgress
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

export default function LoadingProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.start()

    // Artificial small delay to make transitions visible
    const timer = setTimeout(() => {
      NProgress.done()
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname, searchParams])

  return null
}
