// Data Fetching
// 1- SSR Server side rendering (كل مرة بعمل ريفريش )
// 2- SSG Static site generation ( بحمل الداتا وبضل مخزنة في الكاش)
// 3- ISR Incremental Static Regeneraion ( تجمع بين 1 و2)

// same path: / --> if write in path about is show

'use client' // must with useEffect use use client
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import Navbar from './component/navbar/Navbar'

export default function Home() {
 
  return (
    <main className={styles.main}>
    
    </main>
  )
}
