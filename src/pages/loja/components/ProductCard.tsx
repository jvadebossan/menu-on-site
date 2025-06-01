import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Produto } from "../types/types";

export default function ProductCard({ product }: { product: Produto }) {
  return (
    <Card
      key={product?.nome}
      className="border-2 border-neutral-200 shadow-accent rounded-lg p-3 w-full max-w-sm bg-transparent"
    >
      <CardContent className="flex justify-start items-center p-0 min-h-[100px]">
        <img
          src={product?.imagemUrl}
          alt="Product"
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
        <div className="pl-4 flex flex-col justify-between items-start w-full h-24">
          <div className="flex flex-col justify-start items-start w-full">
            <h3 className="text-lg font-semibold text-neutral-800 line-clamp-1">
              {product?.nome}
            </h3>
            <p className="text-sm text-neutral-600 line-clamp-2">
              {product?.descricao}
            </p>
          </div>
          <div className="flex justify-start items-center mt-2">
            <Badge
              variant="default"
              className="bg-green-100 text-green-600 shadow-xs text-xs rounded-full font-semibold"
            >
              Por apenas
            </Badge>
            <span className="ml-2 text-md font-bold text-green-600">
              R${product?.preco}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
