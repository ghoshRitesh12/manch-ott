import { useQuery } from "@tanstack/react-query";
import thumbnailsArray from "@/shared/mockData.json";

function wait(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(res, ms);
  });
}

async function getVideo(videoId: string) {
  try {
    await wait(500);
    return thumbnailsArray.find((e) => e.id === videoId);
  } catch (err) {
    console.log(err);
  }
}

export default function useVideo(videoId: string) {
  return useQuery({
    queryFn: () => getVideo(videoId),
    queryKey: ["video", videoId],
  });
}
