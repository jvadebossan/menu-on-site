import { Button } from "@/components/ui/button";
import { useState } from "react";

type CategoriesProps = {
  categoriesList: string[];
};

export default function Categories({ categoriesList }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoriesList[0]
  );

  return (
    <div className="mt-1 w-full flex items-center h-16 overflow-x-auto scrollbar-none">
      <div className="flex items-center min-w-max whitespace-nowrap">
        {categoriesList.map((category) => (
          <Button
            key={category}
            variant="ghost"
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-1 text-1sm font-semibold text-neutral-700 bg-transparent shadow-none rounded-none border-b-2 decoration-none ${
              selectedCategory === category
                ? "border-orange-500 text-orange-500"
                : "border-transparent"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
