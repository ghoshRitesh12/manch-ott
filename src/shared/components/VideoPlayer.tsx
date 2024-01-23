import Artplayer from "artplayer";
import { useEffect, useRef } from "react";
import { type Option } from "artplayer/types/option";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLElement> {
  option: Option;
  getInstance?: (art: Artplayer) => void;
}

const defaultOptions: Partial<Option> = {
  volume: 0.5,
  isLive: false,
  muted: false,
  autoplay: false,
  pip: true,
  autoSize: true,
  setting: true,
  playbackRate: true,
  fullscreen: true,
  miniProgressBar: true,
  mutex: true,
  backdrop: true,
  playsInline: true,
  autoPlayback: true,
  theme: "#ff6161",
  autoOrientation: true,
  fastForward: true,
  hotkey: true,
  // lock: true,
  // airplay: true,
  // aspectRatio: true,
};

export default function Player({
  option,
  getInstance,
  ...rest
}: VideoPlayerProps) {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const art = new Artplayer({ ...defaultOptions, ...option });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (artRef && art?.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return (
    <div
      id="video-player"
      ref={artRef}
      {...rest}
    ></div>
  );
}
