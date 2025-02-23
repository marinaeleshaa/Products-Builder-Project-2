import { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...rest }: IProps) => {
  return <input className="rounded-xl bg-stone-200 p-2 border-[2px] border-stone-300 focus:outline-none focus-visible:border-amber-800 text-amber-700 shadow-md" {...rest} />;
};

export default Input;
