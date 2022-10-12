import Card from "./Card";

const Main = () => {
  return (
    <>
      <main className="">
        <div className="py-6">
          <div className="mx-auto max-w-7xl mb-6 px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-100">
              Popular near Nashville
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
