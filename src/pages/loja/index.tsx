import { useParams } from "react-router";

import SearchBar from "./components/SearchBar";
import ShopBanner from "./components/ShopBanner";

export default function Loja() {
  const id = useParams().id;
  if (!id) {
    //TODO: Error page
    return <p>Loja não encontrada</p>;
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start h-screen p-3 bg-neutral-100">
        <SearchBar />
        <ShopBanner />
      </div>
    </>
  );
}
