import { useState } from "react";
import uwugif from "./assets/erm-fingers.gif";
import firebase from "./Firebase";

let messageArray = [
  "riz! hi, kumusta ka naman, hope ur doin well",
  "may sasabihin me, mukhang long shot but anyways...",
  "if free ka this May, aayain sana kita, for a second date",
];

let datesArray = ["May 04", "May 11", "May 18", "May 25"];

function App() {
  const [messageToDisplay, setMessageToDisplay] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [chatVisible, setChatVisible] = useState<boolean>(false);

  const SaveDate = async () => {
    try {
      setChatVisible(true);
      const db = firebase.firestore();
      await db.collection("dates").add({
        date: datesArray.find((_element, index) => index == selectedDate),
        timestamp: `${new Date().toDateString()} -
                                ${new Date().toLocaleTimeString()}`,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main className="bg-salmon min-h-svh flex flex-col items-center justify-center gap-5">
        <section className="flex flex-col gap-5">
          <div className="bg-purple p-5 rounded-lg shadow-lg max-w-90 m-auto animate-ball">
            <p className="text-2xl text-cream-dark font-medium text-center animate-fade">
              {messageArray[messageToDisplay]}
            </p>
          </div>
          {messageToDisplay == messageArray.length - 1 ? (
            <div className="bg-cream-light p-5 rounded-lg shadow-lg max-w-90 m-auto animate-ball flex flex-col gap-2">
              <p className="text-xl text-purple font-medium text-center animate-fade">
                When ka pwede hehe
              </p>
              <div className="grid grid-cols-2 gap-2">
                {datesArray.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-purple p-3 rounded-md text-center ${
                        selectedDate == index && "opacity-25"
                      }`}
                      onClick={() => setSelectedDate(index)}
                    >
                      <span className="text-cream-dark font-medium text-center animate-fade">
                        {element}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="text-right">
                <button
                  className={`bg-salmon p-2 rounded-md text-cream-dark font-bold ${
                    selectedDate == null && "opacity-25 pointer-events-none"
                  }`}
                  onClick={SaveDate}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
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
          )}
        </section>
        <div className="relative">
          <img src={uwugif} width={200}></img>
          {chatVisible && (
            <div className="absolute bg-purple p-2 top-2 -left-10 rounded-xl">
              <span className="text-cream-dark">see ya!</span>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
