import Link from "next/link";
import React, { FC } from "react";

import styles from "./Link.module.css";
import { useRouter } from "next/router";

interface LinkProps {
  text: string;
  href: string;
}

const LinkCustom: FC<LinkProps> = ({ text, href }: LinkProps) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <div
        className={`${styles.link} ${asPath === href ? styles.linkActive : ""}`}
      >
        {text}
      </div>
    </Link>
  );
};

export default LinkCustom;
