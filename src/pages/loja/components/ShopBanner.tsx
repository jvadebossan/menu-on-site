import { Button } from "@/components/ui/button";

type ShopBannerProps = {
  name: string;
  desc: string;
};

export default function ShopBanner({ name, desc }: ShopBannerProps) {
  return (
    <div className="w-full flex-col justify-center items-center mb-3">
      <h1 className="text-3xl font-bold text-neutral-700">{name}</h1>
      <p className="py-2 text-1sm font-normal text-neutral-500 text-justify leading-5">
        {desc}
      </p>
      <Button
        variant="link"
        className="text-sm text-orange-500 font-semibold h-auto cursor-pointer hover:underline"
        asChild
      ></Button>
    </div>
  );
}
