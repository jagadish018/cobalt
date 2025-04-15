import { PropsWithChildren } from "react";

export default (props: PropsWithChildren) => {
  return(<div className="flex flex-row  h-screen ">
    <div className="w-48">
      <ul className="flex flex-col">
        <li>blog1</li>
        <li>blog2</li>
        <li>blog3</li>
      </ul>
    </div>
    <div className="w-full">{props.children}</div>
  </div>)
};
