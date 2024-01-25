import useVideoThumbnails from "../services/useVideoThumbnails";
import VideoThumbnailCard from "./VideoThumbnailCard";
import fc from "@/lib/helpers/classes";

type VideoThumbnailDeckProps = {
  classes?: string;
};

export default function VideoThumbnailDeck({
  classes,
}: VideoThumbnailDeckProps) {
  const { data: thumbnails } = useVideoThumbnails();

  return (
    <div
      className={fc(`
        flex justify-start gap-x-8 gap-y-8 flex-wrap
        ${classes}
      `)}
    >
      {thumbnails?.map((t) => (
        <VideoThumbnailCard
          key={t.id}
          videoData={{
            title: t.title,
            category: t.category,
            date: t.date.value,
            src: t.thumbnail.src,
            id: t.id,
          }}
        />
      ))}
    </div>
  );
}
