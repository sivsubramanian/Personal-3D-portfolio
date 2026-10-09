import trackLuci from "../../../assets/music/nastelbom-spa.mp3";

import type { MusicTrack } from "../types";

export const musicTracks = {
  luci: new Howl({ src: [trackLuci], loop: true, volume: 0.28, preload: true }),
} as const;

export const BASE_VOLUMES = {
  luci: 0.28,
} as const satisfies Record<MusicTrack, number>;
