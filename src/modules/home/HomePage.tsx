import VideoThumbnailDeck from "./components/VideoThumbnailDeck";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div>
      <VideoThumbnailDeck classes={`py-8 px-8`} />
    </div>
  );
}
