import { IProduct } from "../interfaces";
import { txtSlicer, UpdatePrice } from "../utils/Functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";
import { Pencil, Receipt, Trash2 } from "lucide-react";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEdit: () => void;
  setProductToEditIdx: (value: number) => void;
  Idx: number;
  openDelete: () => void;
}
const ProductCard = ({
  product,
  setProductToEdit,
  openEdit,
  setProductToEditIdx,
  Idx,
  openDelete,
}: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;
  // ================ render ===================
  const validColor = colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));

  // ================= handler ==================
  function toEdit() {
    setProductToEdit(product);
    openEdit();
    setProductToEditIdx(Idx);
  }

  function toDelete() {
    setProductToEdit(product);
    setProductToEditIdx(Idx);
    openDelete();
  }

  return (
    <div className="border-2 rounded-lg p-2 flex flex-col justify-between shadow-xl shadow-stone-400  max-w-xs min-w-2.5 md:min-w-56 mx-auto space-y-3">
      <Image url={imageURL} alt={title} className="rounded h-64" />
      <h3 className="capitalize text-lg text-amber-900">{title}</h3>
      <p className="text-amber-700 text-sm">{txtSlicer(description)}</p>

      <div className="flex flex-wrap">{validColor}</div>

      <div className="flex justify-between items-center">
        <span className="text-amber-700 text-lg flex items-center">
          <Receipt />
          {UpdatePrice(price)}
        </span>
        <div className="flex items-center gap-2 text-amber-800 text-lg capitalize">
          {category.name}
          <Image
            url={category.imageURL}
            alt={category.name}
            className="rounded-full h-10 w-10"
          />
        </div>
      </div>

      <div className="flex space-x-3 mt-6">
        <Button
          className=" bg-stone-400 flex items-center justify-center gap-3"
          // onClick={() => console.log("YES")}
          width="w-full"
          onClick={toEdit}
        >
          <Pencil /> edit
        </Button>
        <Button
          className=" bg-amber-800 flex items-center justify-center gap-3"
          width="w-full"
          onClick={toDelete}
        >
          <Trash2 />
          delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
