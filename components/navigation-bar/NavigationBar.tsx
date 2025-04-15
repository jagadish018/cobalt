"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../container/Container";

const NavigationBar = () => {
  const path = usePathname();

  return (
    <Container>
      <div>
        <ul className="flex flex-row list-none items-center justify-center gap-8 bg-amber-200">
          <li key="/home" className={path === "/" ? "text-red-500" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li
            key="/enterprise"
            className={path === "/enterprise" ? "text-red-500" : ""}
          >
            <Link href="/enterprise">Enterprise</Link>
          </li>
          <li
            key="/pricing"
            className={path === "/pricing" ? "text-red-500" : ""}
          >
            <Link href="/pricing">Picing</Link>
          </li>

          <li key="/blog" className={path === "/blog" ? "text-red-500" : ""}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default NavigationBar;
