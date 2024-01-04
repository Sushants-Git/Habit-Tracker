import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(() => {
    const daysInMonth = getDaysInMonth(
      new Date().getMonth() + 1,
      new Date().getFullYear(),
    );
    let tempArr = [];
    for (let i = 0; i < daysInMonth; i++) {
      tempArr.push({
        id: i,
        value: false,
      });
    }
    return tempArr;
  });

  // console.log(counter);

  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // console.log(JSON.stringify(counter[counter.length - 1]));

  function handleOnClick(id) {
    // console.log(id);
    setCounter((preValue) => {
      return preValue.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            value: !item.value,
          };
        }
        return item;
      });
    });
  }

  let trueDays = 0;

  counter.forEach((item) => {
    if (item.value) {
      trueDays++;
    }
  });

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="brackets-wrapper">
            {counter.map(({ id, value }) => {
              return (
                <span key={id}>
                  {value ? (
                    <span
                      className="glow brackets"
                      onClick={() => handleOnClick(id)}
                    >
                      [•]
                    </span>
                  ) : (
                    <span
                      className="not-glow brackets"
                      onClick={() => handleOnClick(id)}
                    >
                      [&nbsp;]
                    </span>
                  )}
                </span>
              );
            })}
          </div>
          <div className="text">
            <div className="glow days-text">
              {trueDays}/{counter.length} days
            </div>
            <div className="glow main-text">
              <div>Doing morning</div> <div>exercise</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
