import uwugif from "./assets/erm-fingers.gif";

function App() {
  return (
    <>
      <main className="bg-salmon min-h-svh flex flex-col items-center justify-center gap-5">
        <section className="flex flex-col gap-5">
          <div className="bg-purple p-5 rounded-lg shadow-lg max-w-90 m-auto">
            <p className="text-2xl text-cream-dark font-medium">
              hey! blah blah blah blah blah blah blah,
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <button
              className={
                "bg-cream-light py-3 w-24 rounded-md shadow-xl text-purple text-lg font-bold"
              }
            >
              Yes
            </button>
            <button
              className={
                "bg-cream-light py-3 w-24 rounded-md shadow-xl text-purple text-lg font-bold"
              }
            >
              No
            </button>
          </div>
        </section>
        <img src={uwugif} width={200}></img>
      </main>
    </>
  );
}

export default App;
