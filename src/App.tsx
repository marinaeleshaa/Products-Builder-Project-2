import { ChangeEvent, useState } from "react";
import ProductCard from "./Components/ProductCard";
import MyModal from "./Components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./Components/ui/Button";
import Input from "./Components/ui/input";
import { IProduct } from "./interfaces";

const App = () => {
  // ===========  state ===========
  const [isOpen, setIsOpen] = useState(false);
  const [product, SetProduct] = useState<IProduct>({
    id: "",
    title: "",
    description: "",
    price: "",
    colors: [],
    imageURL: "",
    category: {
      name: "",
      imageURL: "",
    },
  });
  // =========== modal handler ==========
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name } = event.target;
    SetProduct({
      ...product,
      [name]: value,
    });
    console.log(name)
  };
  // ============ render ==============
  const renderProductsList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  const renderFormInputsList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label htmlFor={input.id} className="text-amber-900 text-lg">
        {input.label}
      </label>
      <Input 
        id={input.id} 
        name={input.name} 
        value={product[input.name]} 
        onChange={onChangeHandler} 
      />
    </div>
  ));
  
  return (
    <main className="container ">
      {/* =============== button to add product */}
      <Button
        onClick={open}
        className="rounded-xl bg-amber-800 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-amber-800/70 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Add Product
      </Button>

      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  rounded-3xl gap-8">
        {renderProductsList}
      </div>

      <MyModal close={close} isOpen={isOpen} title="add a new product">
        <form className="space-y-3">
          {renderFormInputsList}
          <div className="flex space-x-3">
            <Button
              className="items-center rounded-xl bg-amber-800 font-semibold focus:outline-none hover:bg-amber-800/70 focus-visible:border-2
            focus-visible:border-amber-950"
              onClick={close}
            >
              submit
            </Button>
            <Button
              className="items-center rounded-xl bg-stone-400 font-semibold focus:outline-none hover:bg-amber-800/70 focus-visible:border-2
            focus-visible:border-amber-950"
              onClick={close}
            >
              cancel
            </Button>
          </div>
        </form>
      </MyModal>
    </main>
  );
};

export default App;
