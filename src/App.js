import Calendar from "./Calendar";
import getNow from "./Time";

const now = getNow();

function App() {
  return (
    <div>
      <Calendar date={now} />
    </div>
    
  )
}

export default App;
