interface IProps {
  url: string;
  alt: string;
  ClassName: string;
}
const Image = ({ ClassName, alt, url }: IProps) => {
  return <img src={url} alt={alt} className={ClassName} />;
};

export default Image;
