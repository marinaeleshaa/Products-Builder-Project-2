import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/Functions";
import Image from "./Image";
import Button from "./ui/Button";
import { Pencil, Receipt, Trash2 } from 'lucide-react';

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;
  return (
    <div className="border-2 rounded-lg p-2 flex flex-col shadow-xl shadow-stone-400  max-w-xs mx-auto">
      <Image url={imageURL} alt="item name" ClassName="rounded h-64" />
      <h3 className="capitalize text-amber-950 mt-2 text-lg text-amber-900">{title}</h3>
      <p className="text-amber-700 text-sm">{txtSlicer(description)}</p>

      <div className="flex space-x-2 mt-4">
        {colors.map((color, index) => (
          <span
            key={index}
            className={`h-6 w-6 rounded-full  cursor-pointer`}
            style={{ backgroundColor: color }}
          ></span>
        ))}
        {/* <span className="h-8 w-8 rounded-full bg-amber-700 cursor-pointer"></span>
        <span className="h-8 w-8 rounded-full bg-orange-400 cursor-pointer"></span>
        <span className="h-8 w-8 rounded-full bg-stone-700 cursor-pointer"></span> */}
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="text-amber-700 text-lg flex items-center">
        <Receipt />
          {price} 
        </span>
        <Image
          url={category.imageURL}
          alt={category.name}
          ClassName="rounded-full h-10 w-10"
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
        <Button className=" bg-amber-800 flex items-center justify-center gap-3" width="w-full">
        <Trash2 />
          delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
