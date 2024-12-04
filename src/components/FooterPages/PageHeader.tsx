import React from "react";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className={styles.pageHeader}>
      <h1>{title}</h1>
    </header>
  );
};

export default PageHeader;
