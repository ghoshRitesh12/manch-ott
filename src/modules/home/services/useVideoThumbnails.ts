// import { client } from "@/shared/config/axios";
// import { VideoThumbnail } from "../types/videoThumbnail";
import useSWR from "swr";
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
	return useSWR(["video_thumbnails"], () => getVideoThumbnails());
}
