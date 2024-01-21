import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store/counter";
import Auth from "@/components/Auth";

type HomeProps = {};

export default function Home({}: HomeProps) {
  const { count, increment, decrement } = useCounterStore(
    ({ count, increment, decrement }) => ({
      count,
      increment,
      decrement,
    })
  );

  return (
    <div>
      This is home page
      <Auth />
      <div className="mt-5 p-4 border-[1px] border-red-400 w-fit">
        count: {count}
        <br /> <br />
        <Button onClick={increment}>increment</Button>
        <br /> <br />
        <Button onClick={decrement}>decrement</Button>
      </div>
    </div>
  );
}
