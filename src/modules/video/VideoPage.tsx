import VideoWrap from "./components/VideoWrap";

import { Button } from "@/shared/components/ui/button";
import { NavLink } from "react-router-dom";

export default function VideoPage() {
  return (
    <div className="sm:m-6">
      <VideoWrap />

      <Button
        variant="default"
        asChild
        className="mt-16"
      >
        <NavLink to="/">Go Back</NavLink>
      </Button>

      <h1 className="text-2xl mt-10">a separate component</h1>
    </div>
  );
}
