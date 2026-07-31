import "./NewProduct.css";

import AdminLayout from "../../../components/Admin/AdminLayout/AdminLayout";

export default function NewProduct() {

  return (

    <AdminLayout>

      <section className="new-product">

        <div className="page-title">

          <span>Produtos</span>

          <h1>Novo Produto</h1>

          <p>

            Cadastre um novo produto para aparecer automaticamente no site.

          </p>

        </div>

        <form className="product-form">

          <div className="form-group">

            <label>Título</label>

            <input
              type="text"
              placeholder="Ex.: Air Fryer Philips Walita"
            />

          </div>

          <div className="form-group">

            <label>Categoria</label>

            <input
              type="text"
              placeholder="Ex.: Cozinha"
            />

          </div>

          <div className="form-group">

            <label>Descrição</label>

            <textarea
              rows={5}
              placeholder="Descreva o produto..."
            />

          </div>

          <div className="form-group">

            <label>Imagem</label>

            <input
              type="file"
            />

          </div>

          <div className="form-group">

            <label>Link de Afiliado</label>

            <input
              type="text"
              placeholder="https://..."
            />

          </div>

          <button>

            Salvar Produto

          </button>

        </form>

      </section>

    </AdminLayout>

  );

}