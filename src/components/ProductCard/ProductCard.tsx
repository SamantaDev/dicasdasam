import { Link } from "react-router-dom";
import "./ProductCard.css";

export interface Product {

  id:number;

  title:string;

  category:string;

  image:string;

  description:string;

  link:string;

}

interface Props{

  product:Product;

}

export default function ProductCard({

  product,

}:Props){

  return(

    <article className="product-card">

      <div className="product-image">

        <img

          src={product.image}

          alt={product.title}

        />

        <span className="category">

          {product.category}

        </span>

      </div>

      <div className="product-content">

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <Link
          to={`/produto/${product.id}`}
          className="details-button"
        >

          Ver detalhes

          <span>→</span>

        </Link>

      </div>

    </article>

  )

}