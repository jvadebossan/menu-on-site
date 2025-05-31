import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ProductCardProps = {
  product: {
    Nome: string;
    Descricao: string;
    Preco: string;
    Disponivel: boolean;
    ImagemUrl: string;
    CategoriaId?: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      key={product.Nome}
      className="border-2 border-neutral-200 shadow-accent rounded-lg p-3 w-full max-w-sm bg-transparent"
    >
      <CardContent className="flex justify-start items-center p-0">
        <img
          src={product.ImagemUrl}
          alt="Product"
          className="w-[32%] h-auto object-cover rounded-md aspect-square"
        />
        <div className="pl-4 flex-col justify-center items-start w-full h-auto">
          <div className="flex-col justify-start items-start w-full h-full">
            <h3 className="text-lg font-semibold text-neutral-800">
              {product.Nome}
            </h3>
            <p className="text-sm text-neutral-600">{product.Descricao}</p>
          </div>
          <div className="flex justify-start items-center">
            <Badge
              variant="default"
              className="bg-green-100 text-green-600 shadow-xs text-xs rounded-full font-semibold"
            >
              Por apenas
            </Badge>
            <span className="ml-2 text-md font-bold text-green-600">
              R${product.Preco}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
