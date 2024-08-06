'use client'

import React from 'react'
// import { VimPage } from '@/app/Components/VimPage/ViotPage';
import {VimPage} from '@/app/Components/VimPage/VimPage'
import styles from "@/app/page.module.css";

export default function Viot() {
  return (
    <main className={styles.main}>
      <VimPage/>
    </main>
  )
}
