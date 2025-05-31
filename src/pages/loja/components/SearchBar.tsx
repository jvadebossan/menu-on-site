import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    //TODO: Implement search func
    console.log("Searching", data);
  };

  return (
    <div className="bg-neutral-100 w-full flex justify-end items-center py-1 rounded-3xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center w-full"
      >
        <input
          required={true}
          type="text"
          placeholder="Search..."
          {...register("search")}
          className="bg-transparent outline-none flex-1 py-1 px-2 ml-2 "
        />
        <Search className="bg-neutral-200 p-1 mr-1.5 rounded-3xl size-8" />
      </form>
    </div>
  );
}
