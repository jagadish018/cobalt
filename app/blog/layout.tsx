import Link from "next/link";
import { PropsWithChildren } from "react";
import BlogLink from "./components/BlogLink";

export default (props: PropsWithChildren) => {
  return (
    <div className="flex flex-row  h-screen ">
      <div className="w-48">
        <ul className="flex flex-col">
          {[1, 2, 3, 4].map((slug) => {
            return (
                <li key={slug} className="py-2 hover:bg-gray-100">
                    <BlogLink slug={slug.toString()} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
};
