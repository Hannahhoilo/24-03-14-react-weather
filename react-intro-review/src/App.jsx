
import './App.css'
import DisplayWelcome from './DisplayWelcome/DisplayWelcome'
import GetAndDisplayWeather from './GetAndDisplayWeather/GetAndDisplayWeather';


function App() {
  const date = new Date ();
  const month = date.getMonth();
  const day = date.getDate();

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  

  return (
    <>
      <DisplayWelcome monthOfYear={months[month +1]} dayOfMonth={day}/>
      <GetAndDisplayWeather/>
    </>
  )
}

export default App
