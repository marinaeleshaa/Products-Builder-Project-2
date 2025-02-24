// TODO"  productObject === errorsObject (title,description,price,imageURL)

/**
 * Validates the product input fields and returns an object containing error messages.
 *
 * @param {productInputs} product - The product object containing title, description, price, and imageURL.
 * @returns {Partial<productInputs>} An object containing validation error messages for each field, if any.
 *
 * @example
 * const product = {
 *   title: "Short",
 *   description: "Too short",
 *   price: "abc",
 *   imageURL: "invalid-url"
 * };
 * 
 * const errors = productValidation(product);
 * console.log(errors);
 * // Output: { title: "Product title must be between 10 and 80 characters", ... }
 */

interface productInputs {
  title: string;
  description: string;
  price: string;
  imageURL: string;
}

export const productValidation = (product: productInputs) => {
  // ? return an object of errors

  const errors: productInputs = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
  };

  const validURL = /^(https?:\/\/)?[\w.-]+\.\w{2,}$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  )
    errors.title = "Product title mus be between 10 an 80 character";
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  )
    errors.description = "Description mus be between 10 an 900 character";

  if (!product.imageURL.trim() || !validURL)
    errors.imageURL = "Valid image url is required";

  if(!product.price.trim() ||isNaN(Number(product.price)))
    errors.price='Valid price is required!'
  return errors;
};
