import { useParams } from "react-router";
import SearchBar from "./components/SearchBar";
import ShopBanner from "./components/ShopBanner";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getFullStore } from "./api/getFullStore";
import type { LojaResponse } from "./types/types"; // ajuste o caminho se necessário
import { useEffect, useState } from "react";

export default function Loja() {
  const id = String(useParams().id);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const product = useQuery<LojaResponse>({
    queryKey: ["getLoja", id],
    queryFn: () => getFullStore(id),
    retry: 1,
    retryOnMount: false,
  });

  useEffect(() => {
    const categorias = product.data?.menu?.categorias;
    if (categorias && categorias.length > 0 && !selectedCategory) {
      setSelectedCategory(categorias[0].nome);
    }
  }, [product.data, selectedCategory]);

  if (product.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <img
        src="https://i.ibb.co/TB9WLpQz/imagem-2025-05-31-203204302.png"
        alt="Shop Image"
        className="w-full h-auto"
      />
      <div className="flex flex-col justify-start items-start h-auto bg-neutral-200 p-3">
        <div className="w-full h-auto bg-neutral-100 flex flex-col justify-start items-start -mt-10 rounded-2xl shadow-lg p-4">
          <ShopBanner
            name={product.data?.nome || "Nome da Loja"}
            desc={
              product.data?.menu.descricao ||
              "O texto contendo a descrição da loja deve ser inserido aqui."
            }
          />
          <SearchBar />
          {product.data?.menu?.categorias && selectedCategory && (
            <Categories
              categoriesList={product.data.menu.categorias}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full gap-3 bg-transparent justify-items-center">
            {product.data?.menu?.categorias
              .find((cat) => cat.nome === selectedCategory)
              ?.produtos.map((produto) => (
                <ProductCard key={produto.id} product={produto} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
