'use client'

import React from 'react'
import { PrivacyPage } from '../Components/Legals/Privacy'
import styles from "@/app/page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <PrivacyPage />
    </main>
  )
}
