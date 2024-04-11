import { useState } from "react";
import uwugif from "./assets/erm-fingers.gif";

let messageArray = [
  "huy! kumusta na hahaha, hope ur doin well",
  "may itatanong me hahaha, mukhang long shot but anyways...",
  "if free ka this May, aayain sana kita, for a second date :)",
];

function App() {
  const [messageToDisplay, setMessageToDisplay] = useState(0);
  return (
    <>
      <main className="bg-salmon min-h-svh flex flex-col items-center justify-center gap-5">
        <section className="flex flex-col gap-5">
          <div className="bg-purple p-5 rounded-lg shadow-lg max-w-90 m-auto animate-ball">
            <p className="text-2xl text-cream-dark font-medium text-center animate-fade">
              {messageArray[messageToDisplay]}
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <button
              className={`bg-cream-light py-3 w-24 rounded-md shadow-xl text-purple text-lg font-bold ${
                messageToDisplay == 0 ? "opacity-25" : ""
              }`}
              onClick={() => {
                if (messageToDisplay == messageArray.length - 1) {
                  //
                } else
                  setMessageToDisplay((prev) => (prev > 0 ? prev - 1 : prev));
              }}
            >
              {messageToDisplay == messageArray.length - 1 ? "No" : "Back"}
            </button>
            <button
              className={
                "bg-cream-light py-3 w-24 rounded-md shadow-xl text-purple text-lg font-bold"
              }
              onClick={() => {
                if (messageToDisplay == messageArray.length - 1) {
                  //
                } else
                  setMessageToDisplay((prev) =>
                    prev == messageArray.length - 1 ? prev : prev + 1
                  );
              }}
            >
              {messageToDisplay == messageArray.length - 1 ? "Yes" : "Next"}
            </button>
          </div>
        </section>
        <img src={uwugif} width={200}></img>
      </main>
    </>
  );
}

export default App;
