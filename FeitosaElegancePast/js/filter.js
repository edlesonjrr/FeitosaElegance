import products from "./products.js";
import { renderProducts } from "./index.js";

export default function initFilters() {
    const filterButtons = document.querySelectorAll(".product-filters button");

    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // mudar o botão ativo
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.dataset.filter;

            // filtrar produtos
            let filtered = category === "all"
                ? products
                : products.filter(p => p.category === category);

            // chama o render original SEM MODIFICAR NADA
            renderProducts(filtered);
        });
    });
}
