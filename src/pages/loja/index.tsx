import { useParams } from "react-router";
import { Search } from "lucide-react";

export default function Loja() {
  const id = useParams().id;
  if (!id) {
    //TODO: Error page
    return <p>Loja não encontrada</p>;
  }

  return (
    <>
      <div className="flex column justify-center items-center h-screen">
        <Search />
      </div>
    </>
  );
}
