import "./NewProduct.css";

import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import { getCategories } from "../../../services/categoryService";
import { createProduct, getProduct, updateProduct } from "../../../services/productService";
import type { Category } from "../../../types/Category";
import type { ProductInput } from "../../../types/Product";

const initialProduct: ProductInput = {
  title: "",
  category: "",
  shortDescription: "",
  description: "",
  image: "",
  affiliateLink: "",
  featured: false,
};

export default function NewProduct() {
  const [product, setProduct] = useState<ProductInput>(initialProduct);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const isEditing = Boolean(productId);
  const hasCategories = categories.length > 0;

  useEffect(() => {
    async function loadCategories() {
      try {
        const availableCategories = await getCategories();
        setCategories(availableCategories.filter((category) => category.active));
      } catch {
        setError("Não foi possível carregar as categorias.");
      } finally {
        setIsCategoriesLoading(false);
      }
    }

    void loadCategories();
  }, []);

  useEffect(() => {
    if (!productId) return;

    const id = productId;

    async function loadProduct() {
      setIsProductLoading(true);
      try {
        const existingProduct = await getProduct(id);
        if (!existingProduct) { toast.error("Produto não encontrado."); navigate("/admin/products"); return; }
        const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, ...productInput } = existingProduct;
        setProduct(productInput);
      } catch { toast.error("Não foi possível carregar o produto."); navigate("/admin/products"); }
      finally { setIsProductLoading(false); }
    }

    void loadProduct();
  }, [navigate, productId]);

  function updateField<Key extends keyof ProductInput>(field: Key, value: ProductInput[Key]) {
    setProduct((currentProduct) => ({ ...currentProduct, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!isCategoriesLoading && !hasCategories) {
      setError("Cadastre uma categoria antes de criar um produto.");
      return;
    }

    if (!product.title.trim() || !product.category || !product.description.trim() || !product.affiliateLink.trim()) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    setIsSaving(true);

    try {
      const productData = {
        ...product,
        title: product.title.trim(),
        shortDescription: product.shortDescription.trim(),
        description: product.description.trim(),
        image: product.image.trim(),
        affiliateLink: product.affiliateLink.trim(),
      };
      if (productId) await updateProduct(productId, productData);
      else await createProduct(productData);
      setProduct(initialProduct);
      toast.success(isEditing ? "Produto atualizado com sucesso." : "Produto cadastrado com sucesso!");
      navigate("/admin/products");
    } catch {
      setError(isEditing ? "Não foi possível atualizar o produto. Tente novamente." : "Não foi possível cadastrar o produto. Tente novamente.");
      toast.error(isEditing ? "Erro ao atualizar o produto." : "Erro ao cadastrar o produto.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <AdminLayout>
      <section className="new-product">
        <div className="new-product__heading">
          <p className="new-product__eyebrow">Produtos</p>
          <h1>{isEditing ? "Editar Produto" : "Novo Produto"}</h1>
          <p>{isEditing ? "Atualize as informações da recomendação." : "Preencha as informações para preparar uma nova recomendação."}</p>
        </div>

        {isProductLoading ? <p className="new-product__loading">Carregando produto...</p> : <form className="new-product__form" onSubmit={handleSubmit} noValidate>
          <div className="new-product__grid">
            <div className="new-product__field new-product__field--full">
              <label htmlFor="product-image">Imagem (URL por enquanto)</label>
              <input id="product-image" type="url" placeholder="https://exemplo.com/imagem-do-produto.jpg" value={product.image} onChange={(event) => updateField("image", event.target.value)} disabled={isSaving} />
              <small>Use o link de uma imagem que represente bem o produto.</small>
            </div>

            <div className="new-product__field">
              <label htmlFor="product-name">Nome</label>
              <input id="product-name" type="text" placeholder="Ex.: Air Fryer Philips Walita" value={product.title} onChange={(event) => updateField("title", event.target.value)} disabled={isSaving} />
            </div>

            <div className="new-product__field">
              <label htmlFor="product-category">Categoria</label>
              {isCategoriesLoading ? <p className="new-product__categories-message">Carregando categorias...</p> : categories.length === 0 ? <div className="new-product__categories-empty"><span>Nenhuma categoria cadastrada</span><Link to="/admin/categories">Criar categoria</Link></div> : <select id="product-category" value={product.category} onChange={(event) => updateField("category", event.target.value)} disabled={isSaving}>
                <option value="" disabled>Selecione uma categoria</option>
                {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
              </select>}
            </div>

            <div className="new-product__field new-product__field--full">
              <label htmlFor="product-short-description">Descrição curta</label>
              <input id="product-short-description" type="text" placeholder="Uma frase breve que destaque o produto." value={product.shortDescription} onChange={(event) => updateField("shortDescription", event.target.value)} disabled={isSaving} />
            </div>

            <div className="new-product__field new-product__field--full">
              <label htmlFor="product-description">Descrição completa</label>
              <textarea id="product-description" rows={6} placeholder="Conte mais detalhes, benefícios e por que você recomenda este produto..." value={product.description} onChange={(event) => updateField("description", event.target.value)} disabled={isSaving} />
            </div>

            <div className="new-product__field new-product__field--full">
              <label htmlFor="product-affiliate-link">Link de afiliado</label>
              <input id="product-affiliate-link" type="url" placeholder="https://..." value={product.affiliateLink} onChange={(event) => updateField("affiliateLink", event.target.value)} disabled={isSaving} />
            </div>
          </div>

          <label className="new-product__featured" htmlFor="product-featured">
            <input id="product-featured" type="checkbox" checked={product.featured} onChange={(event) => updateField("featured", event.target.checked)} disabled={isSaving} />
            <span className="new-product__checkbox" aria-hidden="true" />
            <span>
              <strong>Produto em destaque</strong>
              <small>Exiba este produto em uma posição especial no site.</small>
            </span>
          </label>

          {error && <p className="new-product__error" role="alert">{error}</p>}
          {!isCategoriesLoading && !hasCategories && <div className="new-product__category-warning"><span>Cadastre uma categoria antes de criar um produto.</span><Link to="/admin/categories">Criar Categoria</Link></div>}

          <div className="new-product__actions">
            <button className="new-product__cancel" type="button" onClick={() => navigate("/admin/products")} disabled={isSaving}>Cancelar</button>
            <button className="new-product__save" type="submit" disabled={isSaving || (!isCategoriesLoading && !hasCategories)}>{isSaving ? "Salvando..." : "Salvar"}</button>
          </div>
        </form>}
      </section>
    </AdminLayout>
  );
}
