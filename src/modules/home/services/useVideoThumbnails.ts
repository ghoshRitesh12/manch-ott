// import { client } from "@/shared/config/axios";
// import { VideoThumbnail } from "../types/videoThumbnail";
import { useSuspenseQuery } from "@tanstack/react-query";
import thumbnailsArray from "@/shared/mockData.json";

function wait(ms: number) {
	return new Promise<void>((res) => {
		setTimeout(res, ms);
	});
}

async function getVideoThumbnails() {
	try {
		await wait(1000);
		return thumbnailsArray;
	} catch (err) {
		throw err;
	}
}

export default function useVideoThumbnails() {
	return useSuspenseQuery({
		queryKey: ["video_thumbnails"],
		queryFn: getVideoThumbnails,
		staleTime: Infinity,
	});
}
