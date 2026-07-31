import { Link } from "react-router-dom";
import "./RecommendationCard.css";

export interface Recommendation {

  id:number;

  title:string;

  category:string;

  image:string;

  description:string;

  link:string;

}

interface Props{

  product:Recommendation;

}

export default function RecommendationCard({

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

        <Link to={`/produto/${product.id}`}>

          Ver detalhes →

        </Link>

      </div>

    </article>

  )

}