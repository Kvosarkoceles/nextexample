"use client";

import React from "react";
import styles from "@/app/page.module.css";
import { ProjectViemy } from "@/app/Components/ViemyProject/ViemyProject";
// import{ProjectPage} from "@/app/Components/ProjectPage/ProjectPage"

export default function Blogs() {
  return (
    <main className={styles.main}>
      <ProjectViemy />
    </main>
  );
}
