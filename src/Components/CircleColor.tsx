import { HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLSpanElement> {
color:string
}
const CircleColor = ({color,...rest}:IProps) => {
  return (
    <span className="block  me-1.5 my-1 h-5 w-5 rounded-full cursor-pointer" style={{backgroundColor: color}} {...rest}></span>
  )
}

export default CircleColor