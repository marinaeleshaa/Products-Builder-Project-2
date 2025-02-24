import { ChangeEvent, useState, MouseEvent } from "react";
import ProductCard from "./Components/ProductCard";
import MyModal from "./Components/ui/Modal";
import { Colors, formInputsList, productList } from "./data";
import Button from "./Components/ui/Button";
import Input from "./Components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMessage from "./Components/ErrorMessage";
import CircleColor from "./Components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./Components/ui/Select";

const App = () => {
  // ===========  state ===========
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
  });
  const defaultProductObject = {
    title: "",
    description: "",
    price: "",
    colors: [],
    imageURL: "",
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [products, SetProducts] = useState<IProduct[]>(productList);
  const [product, SetProduct] = useState<IProduct>(defaultProductObject);
  const [tempColor, setTempColor] = useState<string[]>([]);
  // =========== modal handler ==========
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    SetProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const oncancel = () => {
    close();
    SetProduct(defaultProductObject);
  };

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL,
    });
    // console.log(errors);

    const hasError = Object.values(errors).every((value) => value === "");

    if (!hasError) {
      setErrors(errors);
      return;
    }

    SetProducts((prev) => [
      { ...product, colors: tempColor, id: uuid() },
      ...prev,
    ]);
    close();
    SetProduct(defaultProductObject);
    setTempColor([]);
  };

  // ============ render ==============
  const renderProductsList = products.map((product) => (
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
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container ">
      {/* =============== button to add product =================*/}
      <Button
        onClick={open}
        className="rounded-xl bg-amber-800 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-amber-800/70 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        build Product
      </Button>
      {/* =================== products ========================= */}
      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  rounded-3xl gap-8">
        {renderProductsList}
      </div>
      {/* ===================== modal ===================== */}
      <MyModal close={close} isOpen={isOpen} title="add a new product">
        <form className="space-y-3">
          {renderFormInputsList}
          <Select/>
          <div className="flex flex-wrap ">{renderProductColors}</div>
          <div className="flex flex-wrap ">
            {tempColor.map((color) => (
              <span
                key={color}
                className="rounded-xl p-1 me-1 mt-1 text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button
              className="items-center rounded-xl bg-amber-800 font-semibold focus:outline-none focus-visible:border-2
            focus-visible:border-amber-950"
              onClick={submitHandler}
            >
              submit
            </Button>
            <Button
              className="items-center rounded-xl bg-stone-400 font-semibold focus:outline-none focus-visible:border-2
            focus-visible:border-amber-950"
              onClick={oncancel}
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
