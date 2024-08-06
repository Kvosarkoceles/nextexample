'use client'

import React from 'react'
import styles from "@/app/page.module.css";
import { BlogsPage } from '../Components/BlogsPage/BlogsPage';

export default function Blogs() {
  return (
    <main className={styles.main}>
      <BlogsPage />
    </main>
  )
}
