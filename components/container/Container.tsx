import { PropsWithChildren } from "react"


const Container = (props:PropsWithChildren) => {
  return (
    <div className="w-full px-4 md:w-2xl md:px-0 lg:w-4xl md:mx-auto">{props.children}</div>
  )
}

export default Container