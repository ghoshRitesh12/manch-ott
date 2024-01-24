import VideoPlayer from "@/shared/components/VideoPlayer";
import { Button } from "@/shared/components/ui/button";
import { NavLink } from "react-router-dom";

export default function VideoPage() {
  return (
    <div className="sm:m-2">
      <VideoPlayer
        className="aspect-video max-w-[50rem]"
        option={{
          url: "https://firebasestorage.googleapis.com/v0/b/manch-a2643.appspot.com/o/Premiums%2F5eb31682-2ff8-43a5-a4b7-b68e1a6c25a2%2Forigin%2FSampleVideo_1280x720_1mb.mp4?alt=media&token=d30c769b-7eb6-425d-8f27-eaafce17f79f",
          container: "#video-player",
          thumbnails: {
            url: "https://firebasestorage.googleapis.com/v0/b/manch-a2643.appspot.com/o/Premiums%2F9db327c2-249a-4e91-b696-349270e8e9b9%2Fthumbnail.jpg?alt=media&token=0f0ccfdf-677a-4afa-8230-0eadf2c852cc",
            column: 4,
            number: 60,
          },
          // highlight: [
          //   {
          //     time: 0.5,
          //     text: "sample highlight",
          //   },
          //   {
          //     time: 0.58,
          //     text: "sample highlight",
          //   },
          // ],
        }}
      />

      <Button
        variant="default"
        asChild
        className="mt-4"
      >
        <NavLink to="/">Go Back</NavLink>
      </Button>
    </div>
  );
}
