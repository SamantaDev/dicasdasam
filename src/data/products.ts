export interface Product {

  id: number;

  title: string;

  category: string;

  description: string;

  image: string;

  link: string;

}

export const products: Product[] = [

  {
    id: 1,
    title: "Air Fryer Philips Walita",
    category: "Cozinha",
    description: "Uma das melhores Air Fryers do mercado.",
    image: "/images/products/airfryer.jpg",
    link: "https://google.com",
  },

  {
    id: 2,
    title: "Kindle Paperwhite",
    category: "Tecnologia",
    description: "Ideal para quem ama leitura.",
    image: "/images/products/kindle.jpg",
    link: "https://google.com",
  },

  {
    id: 3,
    title: "Fone Bluetooth JBL",
    category: "Tecnologia",
    description: "Excelente qualidade de som.",
    image: "/images/products/fone.jpg",
    link: "https://google.com",
  },

];