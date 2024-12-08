"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Link.module.css";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof NextLink> & {
  checkCurrent?: boolean;
};

export default function Link({ checkCurrent, className, ...props }: Props) {
  const pathname = usePathname();

  const isCurrent = !checkCurrent || pathname === props.href;

  return (
    <NextLink
      {...props}
      className={`${styles.link} ${className}`}
      aria-current={isCurrent}
    />
  );
}
