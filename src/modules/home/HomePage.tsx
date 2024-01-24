// import { useCounterStore } from "@/modules/home/store/counter";
// import { Button } from "@/shared/components/ui/button";
// import Auth from "@/shared/components/Auth";
import VideoThumbnail from "./components/VideoThumbnail";

type HomeProps = {};

export default function Home({}: HomeProps) {
  // const { count, increment, decrement } = useCounterStore(
  //   ({ count, increment, decrement }) => ({
  //     count,
  //     increment,
  //     decrement,
  //   })
  // );

  return (
    <div>
      <VideoThumbnail
        // @ts-ignore
        title="video_thumbnail"
        thumbnailSrc="https://firebasestorage.googleapis.com/v0/b/manch-a2643.appspot.com/o/Premiums%2F9db327c2-249a-4e91-b696-349270e8e9b9%2Fthumbnail.jpg?alt=media&token=0f0ccfdf-677a-4afa-8230-0eadf2c852cc"
      />
      {/* <br />
      <Auth />
      <div className="mt-5 p-4 border-[1px] border-red-400 w-fit">
        count: {count}
        <br /> <br />
        <Button onClick={increment}>increment</Button>
        <br /> <br />
        <Button onClick={decrement}>decrement</Button>
      </div> */}
    </div>
  );
}
