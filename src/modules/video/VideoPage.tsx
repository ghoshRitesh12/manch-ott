// import { Suspense } from "react";
import useVideo from "./services/useVideo";
import VideoPlayer from "./components/VideoPlayer";
import { Button } from "@/shared/components/ui/button";
import { NavLink, useParams } from "react-router-dom";
import { VideoPathParams } from "./types/pathParams";
import { Badge } from "@/shared/components/ui/badge";

export default function VideoPage() {
  const { videoId } = useParams<VideoPathParams>();
  const { data: videoData, isLoading, isError } = useVideo(videoId as string);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>an error occured</p>;
  }

  return (
    <div className="sm:m-6">
      <VideoPlayer
        className="aspect-video max-w-[50rem] rounded-xl overflow-hidden"
        option={{
          container: "#video-player",
          url: videoData?.videos?.find((u) => u.id === 0)?.src as string,
          thumbnails: {
            url: videoData?.thumbnail?.src as string,
            column: 4,
            number: 60,
          },
          quality: videoData?.videos?.map((q) => {
            if (q.id === 0) {
              return {
                default: true,
                html: `${q?.resolution}p`,
                url: q?.src,
              };
            }
            return {
              html: `${q?.resolution}p`,
              url: q?.src,
            };
          }),
        }}
      />

      <div>
        <h1 className="block w-fit font-medium text-2xl mt-4">
          {videoData?.title}
        </h1>

        <div className="flex gap-x-10 mt-4 align-middle">
          <Badge
            variant="secondary"
            className="text-[1rem]"
          >
            {videoData?.category}
          </Badge>

          <div className="block mt-1">
            {new Date(
              videoData?.date?.value?.split("at")?.[0] as string
            )?.toLocaleDateString()}
          </div>
        </div>

        <div className="mt-4">{videoData?.description}</div>
      </div>

      <Button
        variant="default"
        asChild
        className="mt-16"
      >
        <NavLink to="/">Go Back</NavLink>
      </Button>
    </div>
  );
}
