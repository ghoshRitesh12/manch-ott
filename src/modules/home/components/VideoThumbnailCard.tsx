import fc from "@/lib/helpers/classes";
import { NavLink } from "react-router-dom";
import { Badge } from "@/shared/components/ui/badge";
import { VideoThumbnail } from "../types/videoThumbnail";

type VideoThumbnailProps = {
  videoData: VideoThumbnail;
};

export default function VideoThumbnailCard({
  videoData: { title, category, date, src, id },
}: VideoThumbnailProps) {
  return (
    <div className="w-fit border-[0px] border-red-400 overflow-hidden">
      <NavLink
        to={`/video/${id}`}
        className={fc(`
          block w-fit rounded-lg overflow-hidden
          max-w-[20rem]
        `)}
      >
        <img
          src={src}
          alt={title}
          decoding="async"
        />
      </NavLink>

      <div className="flex items-center justify-start mt-2">
        <div>
          <NavLink
            to={`/video/${id}`}
            className="block w-fit font-medium text-lg"
          >
            {title}
          </NavLink>
          <small className="block mt-1">
            {new Date(date.split("at")[0])?.toLocaleDateString()}
          </small>
        </div>

        <Badge
          variant="secondary"
          className="ml-auto text-[.8rem]"
        >
          {category}
        </Badge>
      </div>
    </div>
  );
}
