import "./ProductSearch.css";
import { Search } from "lucide-react";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <section className="product-search">
      <div className="search-box">
        <Search size={20} />

        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </section>
  );
}