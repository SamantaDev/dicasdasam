import "./CategoryFilter.css";

interface Props {

  categories:string[];

  selected:string;

  onSelect:(category:string)=>void;

}

export default function CategoryFilter({

  categories,

  selected,

  onSelect,

}:Props){

  return(

    <section className="category-filter">

      <button

        className={selected==="Todos" ? "active" : ""}

        onClick={()=>onSelect("Todos")}

      >

        Todos

      </button>

      {categories.map(category=>(

        <button

          key={category}

          className={selected===category ? "active" : ""}

          onClick={()=>onSelect(category)}

        >

          {category}

        </button>

      ))}

    </section>

  )

}