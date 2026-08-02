import "./Products.css";

import { Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import { deleteProduct, getProducts } from "../../../services/productService";
import type { Product } from "../../../types/Product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setProducts(await getProducts());
      } catch {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setIsLoading(false);
      }
    }

    void loadProducts();
  }, []);

  async function handleDelete() {
    if (!productToDelete) return;

    setIsDeleting(true);
    try {
      await deleteProduct(productToDelete.id);
      setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productToDelete.id));
      toast.success("Produto excluído com sucesso!");
      setProductToDelete(null);
    } catch {
      toast.error("Não foi possível excluir o produto.");
    } finally {
      setIsDeleting(false);
    }
  }

  function formatDate(product: Product) {
    return product.createdAt ? product.createdAt.toDate().toLocaleDateString("pt-BR") : "—";
  }

  return (
    <AdminLayout>
      <section className="admin-products">
        <header className="admin-products__header">
          <div><p>Produtos</p><h1>Todos os Produtos</h1><span>Gerencie as recomendações cadastradas.</span></div>
          <Link to="/admin/new-product"><Plus size={18} /> Novo Produto</Link>
        </header>

        {isLoading && <p className="admin-products__message">Carregando produtos...</p>}
        {error && <p className="admin-products__message admin-products__message--error" role="alert">{error}</p>}
        {!isLoading && !error && (
          <div className="admin-products__table-wrap">
            <table>
              <thead><tr><th>Imagem</th><th>Nome</th><th>Categoria</th><th>Destaque</th><th>Data de criação</th><th>Editar</th><th>Excluir</th></tr></thead>
              <tbody>
                {products.map((product) => <tr key={product.id}>
                  <td>{product.image ? <img src={product.image} alt="" /> : <span className="admin-products__placeholder">Sem imagem</span>}</td>
                  <td><strong>{product.title}</strong></td><td>{product.category}</td>
                  <td><span className={product.featured ? "admin-products__featured" : "admin-products__not-featured"}>{product.featured ? "Sim" : "Não"}</span></td>
                  <td>{formatDate(product)}</td>
                  <td><Link className="admin-products__edit" to={`/admin/products/${product.id}/edit`} aria-label={`Editar ${product.title}`}><Pencil size={16} /></Link></td>
                  <td><button className="admin-products__delete" type="button" onClick={() => setProductToDelete(product)} aria-label={`Excluir ${product.title}`}><Trash2 size={16} /></button></td>
                </tr>)}
                {products.length === 0 && <tr><td className="admin-products__empty" colSpan={7}>Nenhum produto cadastrado ainda.</td></tr>}
              </tbody>
            </table>
          </div>
        )}
        {productToDelete && <div className="admin-products__modal-backdrop" role="presentation">
          <section className="admin-products__modal" role="dialog" aria-modal="true" aria-labelledby="delete-product-title">
            <h2 id="delete-product-title">Excluir produto?</h2>
            <p>Você tem certeza que deseja excluir <strong>{productToDelete.title}</strong>? Esta ação não poderá ser desfeita.</p>
            <div><button type="button" onClick={() => setProductToDelete(null)} disabled={isDeleting}>Cancelar</button><button className="admin-products__confirm-delete" type="button" onClick={() => void handleDelete()} disabled={isDeleting}>{isDeleting ? "Excluindo..." : "Excluir"}</button></div>
          </section>
        </div>}
      </section>
    </AdminLayout>
  );
}
