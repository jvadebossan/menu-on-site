export default function ShopBanner() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-6">
        <img
          src="/logo.svg" //src="https://placehold.co/96x96/FF5E32/FFFFFF/?text=LOGO"
          alt="Shop Banner"
          className="w-[30%] min-w-[96px] max-w-[256px] rounded-full shadow-lg"
        />
        <div className="pl-5 w-full flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-neutral-800">Nome da Loja</h1>
          <h2 className="pt-2 text-sm font-medium text-neutral-700">
            O texto contendo a descrição da loja deve ser inserido aqui.
          </h2>
        </div>
      </div>
    </>
  );
}
