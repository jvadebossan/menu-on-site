import { Button } from "@/components/ui/button";

type ShopBannerProps = {
  name: string;
  desc: string;
};

export default function ShopBanner({ name, desc }: ShopBannerProps) {
  return (
    <div className="w-full flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-neutral-800">{name}</h1>
      <h2 className="py-2 text-1sm font-semibold text-neutral-500">{desc}</h2>
      <Button
        variant="link"
        className="text-sm text-orange-500 font-semibold p-0 h-auto cursor-pointer hover:underline"
        asChild
      >
        <a href="#">Saiba mais</a>
      </Button>
    </div>
  );
}
