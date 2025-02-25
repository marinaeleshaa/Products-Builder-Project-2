import { ChangeEvent, useState, MouseEvent, FormEvent } from "react";
import ProductCard from "./Components/ProductCard";
import MyModal from "./Components/ui/Modal";
import { Categories, Colors, formInputsList, productList } from "./data";
import Button from "./Components/ui/Button";
import Input from "./Components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMessage from "./Components/ErrorMessage";
import CircleColor from "./Components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./Components/ui/Select";
import { ProductNameType } from "./types";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
const App = () => {
  // ===========  state ===========
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: "",
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
  const [selectedCategory, setSelectedCategory] = useState(Categories[3]);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObject);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);

  // =========== modal handler ==========
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };
  const openEdit = () => {
    setIsOpenEdit(true);
  };

  const closeEdit = () => {
    setIsOpenEdit(false);
  };

  function openDeleteModal() {
    setIsOpenDelete(true);
  }
  function closeDeleteModal() {
    setIsOpenDelete(false);
  }

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

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
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
      colors: tempColor,
    });

    const hasError = Object.values(errors).every((value) => value === "");

    if (!hasError) {
      setErrors({ ...errors });
      return;
    }

    SetProducts((prev) => [
      { ...product, colors: tempColor, id: uuid(), category: selectedCategory },
      ...prev,
    ]);
    close();
    SetProduct(defaultProductObject);
    setTempColor([]);
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const theColor = tempColor.concat(productToEdit.colors);
    const errors = productValidation({
      title: productToEdit.title,
      description: productToEdit.description,
      price: productToEdit.price,
      imageURL: productToEdit.imageURL,
      colors: theColor,
    });
    const hasError = Object.values(errors).every((value) => value === "");

    if (!hasError) {
      setErrors({ ...errors });
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColor.concat(productToEdit.colors),
    };

    SetProducts(updatedProducts);

    setProductToEdit(defaultProductObject);
    setTempColor([]);
    closeEdit();
  };

  const deleteProductHandler = () => {
    const newProducts = products.filter((item) => item.id !== productToEdit.id);
    SetProducts(newProducts);
    closeDeleteModal();
  };
  // ============ render ==============
  const renderProductsList = products.map((product, Idx) => (
    <ProductCard
      product={product}
      key={product.id}
      setProductToEdit={setProductToEdit}
      openEdit={openEdit}
      setProductToEditIdx={setProductToEditIdx}
      Idx={Idx}
      openDelete={openDeleteModal}
    />
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

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: ProductNameType
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-amber-900 text-lg">
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  const renderProductColors = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        setErrors({
          ...errors,
          colors: "",
        });
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          const updatedColors = productToEdit.colors.filter(
            (col) => col !== color
          );
          console.log(updatedColors);
          setProductToEdit((prev) => ({
            ...prev,
            colors: updatedColors,
          }));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container ">
      {/* =============== button to add product =================*/}
      <div className="flex justify-center mt-20">
        <Button
          onClick={open}
          className="rounded-xl bg-amber-800 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-amber-800/70 data-[focus]:outline-1 data-[focus]:outline-white"
          width="w-fit"
        >
          build Product
        </Button>
      </div>
      {/* =================== products ========================= */}
      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  rounded-3xl gap-8">
        {renderProductsList}
      </div>
      {/* ===================== add product modal ===================== */}
      <MyModal close={close} isOpen={isOpen} title="add a new product">
        <form className="space-y-3">
          {renderFormInputsList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex flex-wrap ">
            {renderProductColors}

            <ErrorMessage msg={errors.colors} />
          </div>
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
      {/* ===================== edit product modal ===================== */}
      <MyModal
        close={closeEdit}
        isOpen={isOpenEdit}
        title="update this product"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          <div className="flex flex-wrap ">
            {renderProductColors}

            <ErrorMessage msg={errors.colors} />
          </div>
          <div className="flex flex-wrap ">
            {tempColor.concat(productToEdit.colors).map((color) => (
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
            >
              submit
            </Button>
            <Button
              className="items-center rounded-xl bg-stone-400 font-semibold focus:outline-none focus-visible:border-2
            focus-visible:border-amber-950"
              onClick={closeEdit}
            >
              cancel
            </Button>
          </div>
        </form>
      </MyModal>
      {/* ===================== delete product modal ===================== */}
      <Dialog
        open={isOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-sm  bg-stone-400/50 transition duration-300 ">
          <DialogPanel className="w-full max-w-md rounded-xl bg-stone-200/15 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <DialogTitle className="text-xl/7 text-2xl text-amber-900 capitalize text-center font-bold">
              delete product
            </DialogTitle>
            <Description className="text-amber-900 text-xl my-2">
              Are you sure you want to remove this Product from your Store?
            </Description>
            <p className="text-amber-800 my-2">
              Deleting this product will remove it permanently from your
              inventory. Any associated data, sales history, and other related
              information will also be deleted. Please make sure this is the
              intended action.
            </p>
            <div className="flex gap-4 mt-8">
              <Button className="bg-amber-800" onClick={deleteProductHandler}>
                Deactivate
              </Button>
              <Button className="bg-stone-400" onClick={closeDeleteModal}>
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </main>
  );
};

export default App;
