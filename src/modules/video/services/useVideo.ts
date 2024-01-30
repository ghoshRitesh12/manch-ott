import { useSuspenseQuery } from "@tanstack/react-query";
import thumbnailsArray from "@/shared/mockData.json";

function wait(ms: number) {
	return new Promise<void>((res) => {
		setTimeout(res, ms);
	});
}

async function getVideo(videoId: string) {
	try {
		await wait(1000);
		if (videoId === "error") {
			return Promise.reject("a mock error");
		}
		return thumbnailsArray.find((e) => e?.id === videoId);
	} catch (err) {
		throw err;
	}
}

export default function useVideo(videoId: string) {
	return useSuspenseQuery({
		queryFn: () => getVideo(videoId),
		queryKey: ["video", videoId],
	});
}
