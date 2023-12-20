// Data Fetching
// 1- SSR Server side rendering (كل مرة بعمل ريفريش )
// 2- SSG Static site generation ( بحمل الداتا وبضل مخزنة في الكاش)
// 3- ISR Incremental Static Regeneraion ( تجمع بين 1 و2)



'use client' // must with useEffect use use client
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {
  async function getData(){
    await fetch ('api',{cache:"no-store"}) // SSR --> get api and  no store in cache browser
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <main className={styles.main}>
     page
    </main>
  )
}
