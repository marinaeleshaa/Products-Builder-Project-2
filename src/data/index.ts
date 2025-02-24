import { ICategory, IFormInput, IProduct } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis Nominee",
    description:
      "Genesis has quickly risen as a premium brand, and the GV70 compact luxury SUV stands as a testament to its craftsmanship. With a sleek design and top-tier features, it continues to impress luxury car enthusiasts.",
    imageURL: "./src/img/sofa 1.jpg",
    price: "500000",
    colors: ["#92400e", "#737373", "#1c1917"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "fabric sofa ",
    description:
      "This Italian fabric sofa blends elegance with comfort. Designed with a soft sponge filling and a durable wooden frame, it provides both relaxation and a stylish addition to your living space.",
    imageURL: "./src/img/sofa 2.jpg",
    price: "700000",
    colors: ["#fdba74", "#78716c", "#93c5fd"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Smart Adjustable bed ",
    description:
      "Upgrade your sleep experience with this high-tech adjustable bed. Featuring a remote-controlled reclining function, built-in LED mood lighting, and USB charging ports, this bed is designed for modern living. Enjoy zero-gravity positioning for ultimate comfort, perfect for reading, relaxing, or getting a restful night’s sleep",
    imageURL: "./src/img/bed 3.jpg",
    price: "700000",
    colors: ["#fdba74", "#78716c", "#93c5fd"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/bed 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "toluwalope olaniyan sofa ",
    description:
      "An eco-friendly sofa crafted for both beauty and comfort. Its plush design, wooden frame, and water-resistant fabric make it the perfect choice for modern living rooms.",
    imageURL: "./src/img/sofa 3.jpg",
    price: "500.800",
    colors: ["#fdba74", "#78716c", "#93c5fd", "#a1a1aa"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Kehilwe sofa ",
    description:
      "A stylish sofa designed for contemporary homes. It offers a perfect blend of softness and resilience, making it a great addition to any living space.",
    imageURL: "./src/img/sofa 4.jpg",
    price: "699999",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "hilwesd bed ",
    description:
      "Experience sleek elegance with this minimalist platform bed, featuring a softly upholstered headboard for added comfort. The low-profile frame enhances a modern aesthetic, while the solid wood slats provide durable support—no box spring needed. Perfect for contemporary bedrooms, this bed combines simplicity and sophistication in one stunning piece.",
    imageURL: "./src/img/bed 1.jpg",
    price: "659999",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "bed",
      imageURL: "./src/img/bed 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mazz dining chair",
    description:
      "Designed for elegance and comfort, the Mazz dining chair features sleek wooden legs and a soft, cushioned seat that enhances your dining experience.",
    imageURL: "./src/img/chair 1.jpg",
    price: "599.699",
    colors: ["#431407", "#0ea5e9"],
    category: {
      name: "chair",
      imageURL: "./src/img/chair 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "golden steal chair",
    description:
      "A luxurious yet functional chair, blending a metallic finish with a plush seat to create an elegant dining experience.",
    imageURL: "./src/img/chair 2.jpg",
    price: "500000",
    colors: ["#bef264", "#2563eb", "#FF6E31", "#ca8a04", "#fcd34d"],
    category: {
      name: "chair",
      imageURL: "./src/img/chair 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "mike cool chair",
    description:
      "A modern chair designed for both comfort and aesthetics. With a contemporary design and ergonomic structure, it enhances any dining or office setup.",
    imageURL: "./src/img/chair 3.jpg",
    price: "500.599",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "chair",
      imageURL: "./src/img/chair 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mid-Century Charm",
    description:
      "A compact yet stylish desk that perfectly balances functionality and aesthetics. Crafted for modern homes, it provides a sleek workspace solution.",
    imageURL: "./src/img/desk 1.jpg",
    price: "500.690",
    colors: ["#FF0032", "#1c1917", "#92400e"],
    category: {
      name: "desk",
      imageURL: "./src/img/desk 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Compact desk",
    description:
      "This space-saving desk brings efficiency and style to your workspace. With a sleek design, it blends well in both home and office settings.",
    imageURL: "./src/img/desk 2.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31", "#0c0a09", "#525252"],
    category: {
      name: "desk",
      imageURL: "./src/img/desk 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Scandinavian bed",
    description:
      "Bring warmth and style to your bedroom with this Scandinavian-inspired oak wood bed frame. Designed with clean lines and a natural wood finish, it offers a timeless yet modern look. The sturdy construction ensures long-lasting durability, while the slightly angled legs add a touch of elegance. Ideal for those who love a blend of nature and contemporary design.",
    imageURL: "./src/img/bed 2.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31", "#0c0a09", "#525252"],
    category: {
      name: "desk",
      imageURL: "./src/img/bed 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Compact desk",
    description:
      "An ideal blend of simplicity and functionality, this desk offers a refined touch to any workspace while providing ample room for productivity.",
    imageURL: "./src/img/desk 3.jpg",
    price: "800000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "desk",
      imageURL: "./src/img/desk 1.jpg",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];

export const Colors: string[] = [
  "#9a3412",
  "#a78bfa",
  "#f59e0b",
  "#172554",
  "#38bdf8",
  "#451a03",
  "#fef08a",
  "#022c22",
  "#fb7185",
  "#500724",
  "#be123c",
  "#042f2e",
  "#fed7aa",
  "#450a0a",
  "#171717",
];

export const Categories:ICategory[] = [
  {
    id: uuid(),
    name: "chair",
    imageURL: "./src/img/chair 1.jpg",
  },
  {
    id: uuid(),
    name: "sofa",
    imageURL: "./src/img/sofa 1.jpg",
  },
  {
    id: uuid(),
    name: "desk",
    imageURL: "./src/img/desk 1.jpg",
  },
  {
    id: uuid(),
    name: "bed",
    imageURL: "./src/img/bed 1.jpg",
  },
];
