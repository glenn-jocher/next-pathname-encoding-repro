"use client";

import { usePathname } from "next/navigation";

export function Probe() {
  const pathname = usePathname();
  return (
    <>
      <code id="pathname">{pathname}</code>
      <a id="link" href={"/login?next=" + encodeURIComponent(pathname)}>
        login
      </a>
    </>
  );
}
