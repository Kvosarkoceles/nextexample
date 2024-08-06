'use client'

import React from 'react'
import {TermsPage } from '../Components/Legals/Terms'
import styles from "@/app/page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <TermsPage />
    </main>
  )
}
