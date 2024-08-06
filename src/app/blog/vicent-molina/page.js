'use client'

import React from 'react'
import styles from "@/app/page.module.css";
import { VicentMolina } from '@/app/Components/BlogEntries/VicentMolina';

export default function Blogs() {
  return (
    <main className={styles.main}>
      <VicentMolina />
    </main>
  )
}
