export type AssetSlot = {
  id: string;
  component: string;
  path: string;
  type: "image" | "video";
  aspect: string;
  pixelSize: string;
  description: string;
};

export const pendingAssets: AssetSlot[] = [
  {
    id: "motion-01",
    component: "MotionGallery",
    path: "/images/motion-01.jpg",
    type: "image",
    aspect: "4:5",
    pixelSize: "1200×1500",
    description:
      "Subject mid-movement in gym setting, joggers visible, dramatic gym lighting, dark or neutral environment.",
  },
  {
    id: "motion-02",
    component: "MotionGallery",
    path: "/images/motion-02.jpg",
    type: "image",
    aspect: "4:5",
    pixelSize: "1200×1500",
    description:
      "Subject walking in urban environment, sidewalk/concrete/architectural lines, daylight or golden hour, editorial street photography feel.",
  },
  {
    id: "motion-03",
    component: "MotionGallery",
    path: "/images/motion-03.jpg",
    type: "image",
    aspect: "4:5",
    pixelSize: "1200×1500",
    description:
      "Subject in clean studio environment, neutral backdrop, controlled lighting, fashion editorial feel, joggers as visual focus.",
  },
  {
    id: "motion-04",
    component: "MotionGallery",
    path: "/images/motion-04.jpg",
    type: "image",
    aspect: "4:5",
    pixelSize: "1200×1500",
    description:
      "Subject in athletic transition, motion blur on body acceptable, joggers stay sharp, captures movement claim.",
  },
  {
    id: "detail-01",
    component: "ExperimentDetail",
    path: "/images/detail-01.jpg",
    type: "image",
    aspect: "1:1",
    pixelSize: "1200×1200",
    description:
      "Macro shot of bonded seam where two panels join, fabric texture, hard side lighting, no thread visible.",
  },
  {
    id: "detail-02",
    component: "ExperimentDetail",
    path: "/images/detail-02.jpg",
    type: "image",
    aspect: "1:1",
    pixelSize: "1200×1200",
    description:
      "Inner thigh motion gusset, angular shot showing panel shape and integration with surrounding fabric.",
  },
  {
    id: "detail-03",
    component: "ExperimentDetail",
    path: "/images/detail-03.jpg",
    type: "image",
    aspect: "1:1",
    pixelSize: "1200×1200",
    description:
      "Bottom cuff close-up with elastic ribbing, piping line, and visible fabric weave.",
  },
  {
    id: "detail-04",
    component: "ExperimentDetail",
    path: "/images/detail-04.jpg",
    type: "image",
    aspect: "1:1",
    pixelSize: "1200×1200",
    description:
      "Macro of zipper pocket with sharp zipper pull, visible hardware, and slightly soft surrounding fabric.",
  },
  {
    id: "motion-study-001",
    component: "MotionStudy",
    path: "/videos/motion-study-001.mp4",
    type: "video",
    aspect: "16:9",
    pixelSize: "1920×1080",
    description:
      "Cinematic motion study of the joggers, 15 seconds or shorter, muted loop with no audio.",
  },
  {
    id: "brand-transition-01",
    component: "BrandTransition",
    path: "/videos/brand-transition-01.mp4",
    type: "video",
    aspect: "16:9",
    pixelSize: "1920×1080",
    description:
      "Animated test tube logo filling with lab-green liquid, pulsing, or rotating as a subtle seamless loop.",
  },
  {
    id: "brand-motto",
    component: "BrandTransition",
    path: "/videos/brand-motto.mp4",
    type: "video",
    aspect: "21:9",
    pixelSize: "2560×1080",
    description:
      "Wide cinematic block with the brand motto in massive type and subtle particle or scan-line motion.",
  },
];
