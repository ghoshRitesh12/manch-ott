// import { client } from "@/shared/config/axios";
// import { VideoThumbnail } from "../types/videoThumbnail";
import { useQuery } from "@tanstack/react-query";
import thumbnailsArray from "@/shared/mockData.json";

function wait(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(res, ms);
  });
}

async function getVideoThumbnails() {
  try {
    await wait(500);
    return thumbnailsArray;
  } catch (err) {
    console.log(err);
  }
}

export default function useVideoThumbnails() {
  return useQuery({
    queryFn: () => getVideoThumbnails(),
    queryKey: ["video_thumbnails"],
  });
}
