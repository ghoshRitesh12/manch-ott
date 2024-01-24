import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { NavLink } from "react-router-dom";

type Props = {
  thumbnailSrc: string;
};

export default function VideoThumbnail({ thumbnailSrc }: Props) {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>A sample video</CardTitle>
        <CardDescription>
          This is the description of a sample video
        </CardDescription>
      </CardHeader>
      <CardContent className="relative border-0 border-red-200">
        <img
          className="rounded-xl"
          src={thumbnailSrc}
          alt=""
        />
        <Badge
          variant="default"
          className="absolute bottom-8 right-9 "
        >
          00:05
        </Badge>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
        >
          <NavLink to="/video">View Video</NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
}
