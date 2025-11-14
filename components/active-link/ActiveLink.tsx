"use client";

import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text, ...rest }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathName === path && styles["active-link"]}`}
      href={path}
      {...rest}
    >
      {text}
    </Link>
  );
};
