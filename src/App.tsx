import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store/counter";

function App() {
  const { count, increment, decrement } = useCounterStore(
    ({ count, increment, decrement }) => ({
      count,
      increment,
      decrement,
    })
  );

  return (
    <>
      <h1>Vite + React</h1>
      <div className="mt-5 p-4 border-[1px] border-red-400 w-fit">
        count: {count}
        <br /> <br />
        <Button onClick={increment}>increment</Button>
        <br /> <br />
        <Button onClick={decrement}>decrement</Button>
      </div>
    </>
  );
}

export default App;
