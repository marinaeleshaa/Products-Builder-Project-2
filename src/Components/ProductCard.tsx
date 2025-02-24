import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/Functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";
import { Pencil, Receipt, Trash2 } from "lucide-react";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;

  const validColor = colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));

  return (
    <div className="border-2 rounded-lg p-2 flex flex-col justify-between shadow-xl shadow-stone-400  max-w-xs min-w-2.5 md:min-w-56 mx-auto space-y-3">
      <Image url={imageURL} alt={title} className="rounded h-64" />
      <h3 className="capitalize text-lg text-amber-900">{title}</h3>
      <p className="text-amber-700 text-sm">{txtSlicer(description)}</p>

      <div className="flex flex-wrap">{validColor}</div>

      <div className="flex justify-between items-center">
        <span className="text-amber-700 text-lg flex items-center">
          <Receipt />
          {price}
        </span>
        <Image
          url={category.imageURL}
          alt={category.name}
          className="rounded-full h-10 w-10"
        />
      </div>

      <div className="flex space-x-3 mt-6">
        <Button
          className=" bg-stone-400 flex items-center justify-center gap-3"
          // onClick={() => console.log("YES")}
          width="w-full"
        >
          <Pencil /> edit
        </Button>
        <Button
          className=" bg-amber-800 flex items-center justify-center gap-3"
          width="w-full"
        >
          <Trash2 />
          delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
