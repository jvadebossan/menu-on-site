import { useParams } from "react-router";
import SearchBar from "./components/SearchBar";
import ShopBanner from "./components/ShopBanner";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";

export default function Loja() {
  const id = useParams().id;
  if (!id) {
    //TODO: Error page
    return <p>Loja não encontrada</p>;
  }

  const productTest = {
    Nome: "Triple Cheddar Burguer",
    Descricao:
      "Delicioso produto feito com ingredientes frescos e selecionados.",
    Preco: "19.99",
    Disponivel: true,
    ImagemUrl: "https://i.ibb.co/hFD7p9BG/imagem-2025-05-31-185824086.png",
  };

  return (
    <>
      <img
        src="https://i.ibb.co/SD0WzT8w/image.png" //"https://placehold.co/250x120/FF5E32/FFFFFF/?text=SHOP-IMAGE"
        alt="Shop Image"
        className="w-full h-auto"
      />
      <div className="flex flex-col justify-start items-start h-auto bg-neutral-200 p-3">
        <div className="w-full h-auto bg-neutral-100 flex flex-col justify-start items-start -mt-10 rounded-2xl shadow-lg p-4">
          <ShopBanner
            name={"Mestre Dos Burguers"}
            desc={
              "O texto contendo a descrição da loja deve ser inserido aqui. O texto contendo a descrição da loja deve ser inserido aqui."
            }
          />
          <br />
          <SearchBar />
          <Categories
            categoriesList={[
              "Promoções",
              "Mais pedidos",
              "Veganos",
              "Doces",
              "Bebidas",
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 w-full gap-3 bg-transparent justify-items-center">
            <ProductCard product={productTest} />
            <ProductCard product={productTest} />
            <ProductCard product={productTest} />
            <ProductCard product={productTest} />
          </div>
        </div>
      </div>
    </>
  );
}
