import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

import useVideo from "../services/useVideo";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { VideoPathParams } from "../types/pathParams";

function _VideoWrap({ videoId }: { videoId: string }) {
  const { data: videoData } = useVideo(videoId);

  return (
    <div>
      <VideoPlayer
        className="aspect-video max-w-[50rem] rounded-xl overflow-hidden"
        option={{
          container: "#video-player",
          url: videoData?.videos?.find((u) => u?.id === 0)?.src as string,
          thumbnails: {
            url: videoData?.thumbnail?.src as string,
            column: 4,
            number: 60,
          },
          quality: videoData?.videos?.map((q) => {
            return {
              default: q?.id === 0,
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
    </div>
  );
}

export default function VideoWrap() {
  const { videoId } = useParams<VideoPathParams>();
  const [_videoId, _setVideoId] = useState("error");

  return videoId ? (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={() => {
            _setVideoId(videoId);
            reset();
          }}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
              There was an error!
              <Button
                onClick={() => {
                  console.log("resetting error");
                  resetErrorBoundary();
                  console.clear();
                }}
              >
                Try again
              </Button>
              <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            </div>
          )}
        >
          <Suspense
            fallback={<h1 className="text-2xl mt-10">VIDEO LOADING....</h1>}
          >
            <_VideoWrap videoId={_videoId} />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  ) : null;
}
