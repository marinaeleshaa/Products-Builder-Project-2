interface IProps {
  url: string;
  alt: string;
  className?: string; // Optional className
}

const Image = ({ className, alt, url }: IProps) => {
  const validSrc = url?.trim()
    ? url
    : "https://i.pinimg.com/736x/e4/37/c6/e437c610a7179cfcde7b550341d70b65.jpg"; // New placeholder

  return <img src={validSrc} alt={alt || "Image"} className={className} />;
};

export default Image;


