export default function CartModal() {
  return (
    <div className="fixed z-50 w-1/2 top-0 right-0 bottom-0 bg-black">
      <header className="flex justify-between items-center p-4">
        <button className="text-white">X</button>
        <h2 className="text-white">cart</h2>
        <div className="text-white"></div>
      </header>
      <main>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p>product</p>
          </div>
        </div>
      </main>
    </div>
  );
}
