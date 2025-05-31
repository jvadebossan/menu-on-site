import { useParams } from "react-router";

import SearchBar from "./components/SearchBar";

export default function Loja() {
  const id = useParams().id;
  if (!id) {
    //TODO: Error page
    return <p>Loja não encontrada</p>;
  }

  return (
    <>
      <div className="flex column justify-center items-start h-screen p-3">
        <SearchBar />
      </div>
    </>
  );
}
