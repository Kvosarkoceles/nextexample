'use client'

import React from 'react'
import { AboutPage } from '../Components/AboutPage/AboutPage'
import styles from "@/app/page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <AboutPage />
    </main>
  )
}
