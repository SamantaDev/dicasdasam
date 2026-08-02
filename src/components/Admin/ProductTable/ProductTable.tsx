import "./ProductTable.css";

import { Pencil, Trash2 } from "lucide-react";

import type { Product } from "../../../types/Product";


interface ProductTableProps {
  products: Product[];
}


export default function ProductTable({
  products,
}: ProductTableProps) {


  return (

    <section
      className="product-table"
      aria-labelledby="recent-products-title"
    >

      <div className="product-table__heading">

        <div>
          <p>Conteúdo recente</p>

          <h2 id="recent-products-title">
            Últimos Produtos
          </h2>
        </div>


        <a href="/admin/products">
          Ver todos →
        </a>


      </div>


      <div className="product-table__overflow">


        <table>


          <thead>

            <tr>

              <th>Imagem</th>

              <th>Nome</th>

              <th>Categoria</th>

              <th>Status</th>

              <th aria-label="Editar"/>

              <th aria-label="Excluir"/>

            </tr>

          </thead>


          <tbody>


            {products.map((product)=>(

              <tr key={product.id}>


                <td>

                  {product.image ? (

                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-table__photo"
                    />

                  ) : (

                    "—"

                  )}

                </td>


                <td>

                  <strong>
                    {product.title}
                  </strong>

                </td>


                <td>
                  {product.category}
                </td>


                <td>

                  <span className="product-table__status">
                    Publicado
                  </span>

                </td>


                <td>

                  <button
                    type="button"
                    aria-label={`Editar ${product.title}`}
                  >

                    <Pencil size={16}/>

                  </button>

                </td>


                <td>

                  <button
                    className="product-table__delete"
                    type="button"
                    aria-label={`Excluir ${product.title}`}
                  >

                    <Trash2 size={16}/>

                  </button>

                </td>


              </tr>

            ))}


            {products.length === 0 && (

              <tr>

                <td colSpan={6}>
                  Nenhum produto cadastrado.
                </td>

              </tr>

            )}


          </tbody>


        </table>


      </div>


    </section>

  );

}