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
    colors: ["#92400e", "#525252", "#172554"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Fabric Sofa",
    description:
      "This Italian fabric sofa blends elegance with comfort. Designed with a soft sponge filling and a durable wooden frame, it provides both relaxation and a stylish addition to your living space.",
    imageURL: "./src/img/sofa 2.jpg",
    price: "700000",
    colors: ["#fed7aa", "#525252", "#93c5fd"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Smart Adjustable Bed",
    description:
      "Upgrade your sleep experience with this high-tech adjustable bed. Featuring a remote-controlled reclining function, built-in LED mood lighting, and USB charging ports, this bed is designed for modern living.",
    imageURL: "./src/img/bed 3.jpg",
    price: "650000",
    colors: ["#fef08a", "#525252", "#93c5fd"],
    category: {
      name: "Bed",
      imageURL: "./src/img/bed 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Toluwalope Olaniyan Sofa",
    description:
      "An eco-friendly sofa crafted for both beauty and comfort. Its plush design, wooden frame, and water-resistant fabric make it the perfect choice for modern living rooms.",
    imageURL: "./src/img/sofa 3.jpg",
    price: "580000",
    colors: ["#fed7aa", "#525252", "#93c5fd", "#a1a1aa"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Kehilwe Sofa",
    description:
      "A stylish sofa designed for contemporary homes. It offers a perfect blend of softness and resilience, making it a great addition to any living space.",
    imageURL: "./src/img/sofa 4.jpg",
    price: "690000",
    colors: ["#451a03", "#2563eb", "#FF6E31"],
    category: {
      name: "Sofa",
      imageURL: "./src/img/sofa 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Hilwesd Bed",
    description:
      "Experience sleek elegance with this minimalist platform bed, featuring a softly upholstered headboard for added comfort.",
    imageURL: "./src/img/bed 1.jpg",
    price: "660000",
    colors: ["#fef08a", "#2563eb", "#FF6E31"],
    category: {
      name: "Bed",
      imageURL: "./src/img/bed 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mazz Dining Chair",
    description:
      "Designed for elegance and comfort, the Mazz dining chair features sleek wooden legs and a soft, cushioned seat that enhances your dining experience.",
    imageURL: "./src/img/chair 1.jpg",
    price: "599000",
    colors: ["#431407", "#2563eb"],
    category: {
      name: "Chair",
      imageURL: "./src/img/chair 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Golden Steel Chair",
    description:
      "A luxurious yet functional chair, blending a metallic finish with a plush seat to create an elegant dining experience.",
    imageURL: "./src/img/chair 2.jpg",
    price: "500000",
    colors: ["#2563eb", "#FF6E31", "#ca8a04", "#451a03"],
    category: {
      name: "Chair",
      imageURL: "./src/img/chair 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mike Cool Chair",
    description:
      "A modern chair designed for both comfort and aesthetics. With a contemporary design and ergonomic structure, it enhances any dining or office setup.",
    imageURL: "./src/img/chair 3.jpg",
    price: "500500",
    colors: ["#451a03", "#2563eb", "#FF6E31"],
    category: {
      name: "Chair",
      imageURL: "./src/img/chair 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mid-Century Charm Desk",
    description:
      "A compact yet stylish desk that perfectly balances functionality and aesthetics. Crafted for modern homes, it provides a sleek workspace solution.",
    imageURL: "./src/img/desk 1.jpg",
    price: "500600",
    colors: ["#022c22", "#a78bfa", "#92400e"],
    category: {
      name: "Desk",
      imageURL: "./src/img/desk 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Compact Desk",
    description:
      "This space-saving desk brings efficiency and style to your workspace. With a sleek design, it blends well in both home and office settings.",
    imageURL: "./src/img/desk 2.jpg",
    price: "500000",
    colors: ["#451a03", "#2563eb", "#FF6E31", "#0c0a09", "#525252"],
    category: {
      name: "Desk",
      imageURL: "./src/img/desk 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Scandinavian Bed",
    description:
      "Bring warmth and style to your bedroom with this Scandinavian-inspired oak wood bed frame.",
    imageURL: "./src/img/bed 2.jpg",
    price: "500000",
    colors: ["#451a03", "#2563eb", "#FF6E31", "#0c0a09", "#525252"],
    category: {
      name: "Bed",
      imageURL: "./src/img/bed 1.jpg",
    },
  },
  {
    id: uuid(),
    title: "Compact Desk",
    description:
      "An ideal blend of simplicity and functionality, this desk offers a refined touch to any workspace while providing ample room for productivity.",
    imageURL: "./src/img/desk 3.jpg",
    price: "800000",
    colors: ["#022c22", "#2563eb", "#FF6E31"],
    category: {
      name: "Desk",
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
  "#a78bfa",
  "#172554",
  "#451a03",
  "#fef08a",
  "#022c22",
  "#fed7aa",
  "#92400e",
  "#93c5fd",
  "#a1a1aa",
  "#2563eb",
  "#FF6E31",
  "#431407",
  "#ca8a04",
  "#0c0a09",
  "#525252",
];

export const Categories: ICategory[] = [
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
