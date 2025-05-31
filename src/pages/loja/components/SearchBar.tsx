import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    //TODO: Implement search func
    console.log("Searching", data);
  };

  return (
    <div className="bg-neutral-200 w-full flex justify-end items-center py-1 rounded-3xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center w-full"
      >
        <Input
          required
          type="text"
          placeholder="O que você quer comer hoje?"
          {...register("search")}
          className="bg-transparent outline-none flex-1 py-1 px-2 ml-2 border-none shadow-none focus-visible:ring-0 focus-visible:border-none"
        />
        <Search className="p-1 mr-1.5 rounded-3xl size-8" />
      </form>
    </div>
  );
}
