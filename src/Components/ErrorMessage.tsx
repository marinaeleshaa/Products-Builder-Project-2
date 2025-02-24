interface IProps {
  msg: string;
}
const ErrorMessage = ({ msg }: IProps) => {
  if (!msg) return null; // Early return for cleaner JSX

  return <div className="text-red-700">{msg}</div>;
};

export default ErrorMessage;
