import { useMemo, useState } from "react";

import PageHero from "../../components/PageHero/PageHero";
import ProductSearch from "../../components/ProductSearch/ProductSearch";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import { products } from "../../data/products";

export default function Products() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = useMemo(() => {

    return [...new Set(products.map(product => product.category))];

  }, []);

  const filteredProducts = useMemo(() => {

    return products.filter(product => {

      const matchesSearch =
        (
          product.title +
          product.category +
          product.description
        )
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }, [search, selectedCategory]);

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

      <FeaturedProducts
        products={filteredProducts}
        badge="Produtos"
        title="Todos os Produtos"
        subtitle={`${filteredProducts.length} produto(s) encontrado(s)`}
      />

    </>

  );

}