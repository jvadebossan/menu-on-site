import { Button } from "@/components/ui/button";
import type { Categoria } from "../types/types";

type CategoriesProps = {
  categoriesList: Categoria[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function Categories({
  categoriesList,
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) {
  return (
    <div className="mt-1 w-full flex items-center h-16 overflow-x-auto scrollbar-none">
      <div className="flex items-center min-w-max whitespace-nowrap">
        {categoriesList.map((category) => {
          const isSelected = selectedCategory === category.nome;
          return (
            <Button
              key={category.id}
              variant="ghost"
              onClick={() => setSelectedCategory(category.nome)}
              className={`px-4 py-2 mx-1 text-1sm font-semibold bg-transparent shadow-none rounded-none border-b-2 decoration-none hover:text-orange-500
              ${
                isSelected
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-neutral-700"
              }
            `}
            >
              {category.nome}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
