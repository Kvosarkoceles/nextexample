"use client";

import React from "react";
import styles from "@/app/page.module.css";
// import { ProjectViemy } from "@/app/Components/ViemyProject/ViemyProject";
// import{ProjectPage} from "@/app/Components/ProjectPage/ProjectPage"

import { ProjectViot } from "@/app/Components/ViotProject/ViotProject";

export default function ViotProject() {
  return (
    <main className={styles.main}>
      <ProjectViot />
    </main>
  );
}
