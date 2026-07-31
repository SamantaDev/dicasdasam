import "./Categories.css";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="categories">

      <div className="categories-title">

        <span>Explore</span>

        <h2>Encontre exatamente o que procura</h2>

        <p>
          Tudo organizado para facilitar suas descobertas.
        </p>

      </div>

      <div className="categories-grid">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <article
              key={category.id}
              className="category-card"
            >

              <div className="icon">

                <Icon size={36} />

              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

            </article>

          );

        })}

      </div>

    </section>
  );
}