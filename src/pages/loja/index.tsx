import { useParams } from "react-router";
import SearchBar from "./components/SearchBar";
import ShopBanner from "./components/ShopBanner";
import Categories from "./components/Categories";

export default function Loja() {
  const id = useParams().id;
  if (!id) {
    //TODO: Error page
    return <p>Loja não encontrada</p>;
  }

  return (
    <>
      <img
        src="https://i.ibb.co/SD0WzT8w/image.png" //"https://placehold.co/250x120/FF5E32/FFFFFF/?text=SHOP-IMAGE"
        alt="Shop Image"
        className="w-full h-auto"
      />
      <div className="flex flex-col justify-start items-start h-screen bg-neutral-200 p-4">
        <div className=" w-full h-full bg-neutral-100 flex flex-col justify-start items-start relative bottom-15 rounded-2xl shadow-lg p-4">
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
        </div>
      </div>
    </>
  );
}
