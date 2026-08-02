import { useEffect, useMemo, useState } from "react";

import PageHero from "../../components/PageHero/PageHero";
import ProductSearch from "../../components/ProductSearch/ProductSearch";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import { getProducts } from "../../services/productService";
import type { Product } from "../../types/Product";

// Categorias que pertencem ao universo "Produtos"
const PRODUCT_CATEGORIES = [
  "tecnologia",
  "casa",
  "cozinha",
  "beleza",
  "moda",
  "esporte",
  "livros",
  "pet",
  "automotivo",
  "escritório",
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();

        // Mantém apenas produtos físicos
        const onlyProducts = data.filter((product) =>
          PRODUCT_CATEGORIES.includes(product.category.toLowerCase())
        );

        setProducts(onlyProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const categories = useMemo(() => {
    return [
      "Todos",
      ...new Set(products.map((product) => product.category)),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = (
        product.title +
        product.category +
        product.description
      ).toLowerCase();

      const matchesSearch = searchText.includes(
        search.toLowerCase()
      );

      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  return (
    <>
      <PageHero
        title="Produtos"
        subtitle="Todos os produtos que realmente testei, aprovei e recomendo."
      />

      <ProductSearch
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {loading ? (
        <div
          style={{
            padding: "80px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Carregando produtos...
        </div>
      ) : (
        <FeaturedProducts
          products={filteredProducts}
          badge="Produtos"
          title="Todos os Produtos"
          subtitle={`${filteredProducts.length} produto(s) encontrado(s)`}
        />
      )}
    </>
  );
}