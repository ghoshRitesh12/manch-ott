import useVideoThumbnails from "../services/useVideoThumbnails";
import VideoThumbnailCard from "./VideoThumbnailCard";
import fc from "@/lib/helpers/classes";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/shared/components/ui/button";

type VideoThumbnailDeckProps = {
	classes?: string;
};

function _VideoThumbnailDeck({ classes }: VideoThumbnailDeckProps) {
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

export default function VideoThumbnailDeck(props: VideoThumbnailDeckProps) {
	return (
		<ErrorBoundary
			fallbackRender={({ error, resetErrorBoundary }) => (
				<div>
					There was an error!{" "}
					<Button onClick={() => resetErrorBoundary()}>Try again</Button>
					<pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
				</div>
			)}
		>
			<Suspense
				fallback={
					<h1 className="text-2xl mt-10">THUMBNAIL DECK LOADING....</h1>
				}
			>
				<_VideoThumbnailDeck {...props} />
			</Suspense>
		</ErrorBoundary>
	);
}
