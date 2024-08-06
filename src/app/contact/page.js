'use client'

import React from 'react'
import { ContactPage } from '../Components/ContactPage/ContactPage'
import styles from "@/app/page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <ContactPage />
    </main>
  )
}
