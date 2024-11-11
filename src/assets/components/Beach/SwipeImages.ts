import img1 from "../../images/swipe/1.jpg";
import img2 from "../../images/swipe/2.jpg";
import img3 from "../../images/swipe/3.jpg";
import img4 from "../../images/swipe/4.jpg";
import img5 from "../../images/swipe/5.jpg";
import img6 from "../../images/swipe/6.jpg";
import { DestinationInfo } from "../interfaces/interface";

export const infoBeach: DestinationInfo[] = [
  {
    id: crypto.randomUUID(),
    src: img1,
    alt: "Random travel picture",
    destination: "Costa Rica",

    price: 1000,
    description:
      "test ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mauris mattis, mattis sapien efficitur, scelerisque magna. Phasellus urna ex, cursus non urna ac, porta placerat nibh. Maecenas at molestie erat, ut commodo nisi. Suspendisse sed quam diam. Curabitur tempor pretium erat bibendum efficitur. Sed malesuada vehicula metus, vitae cursus ligula faucibus nec. ",
  },
  {
    id: crypto.randomUUID(),
    src: img2,
    alt: "Random travel picture",
    destination: "Malaysia",

    price: 1800,
    description:
      "test2 ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mauris mattis, mattis sapien efficitur, scelerisque magna. Phasellus urna ex, cursus non urna ac, porta placerat nibh. Maecenas at molestie erat, ut commodo nisi. Suspendisse sed quam diam. Curabitur tempor pretium erat bibendum efficitur. Sed malesuada vehicula metus, vitae cursus ligula faucibus nec.  ",
  },
  {
    id: crypto.randomUUID(),
    src: img3,
    alt: "Random travel picture",
    destination: "Thailand",

    price: 2000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mauris mattis, mattis sapien efficitur, scelerisque magna. Phasellus urna ex, cursus non urna ac, porta placerat nibh. Maecenas at molestie erat, ut commodo nisi. Suspendisse sed quam diam. Curabitur tempor pretium erat bibendum efficitur. Sed malesuada vehicula metus, vitae cursus ligula faucibus nec.  ",
  },
  {
    id: crypto.randomUUID(),
    src: img4,
    alt: "Random travel picture",
    destination: "Fiji",

    price: 2500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mauris mattis, mattis sapien efficitur, scelerisque magna. Phasellus urna ex, cursus non urna ac, porta placerat nibh. Maecenas at molestie erat, ut commodo nisi. Suspendisse sed quam diam. Curabitur tempor pretium erat bibendum efficitur. Sed malesuada vehicula metus, vitae cursus ligula faucibus nec.  ",
  },
  {
    id: crypto.randomUUID(),
    src: img5,
    alt: "Random travel picture",
    destination: "Madagascar",

    price: 1700,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mauris mattis, mattis sapien efficitur, scelerisque magna. Phasellus urna ex, cursus non urna ac, porta placerat nibh. Maecenas at molestie erat, ut commodo nisi. Suspendisse sed quam diam. Curabitur tempor pretium erat bibendum efficitur. Sed malesuada vehicula metus, vitae cursus ligula faucibus nec. ",
  },
  {
    id: crypto.randomUUID(),
    src: img6,
    alt: "Random travel picture",
    destination: "Vietnam",

    price: 3000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mauris mattis, mattis sapien efficitur, scelerisque magna. Phasellus urna ex, cursus non urna ac, porta placerat nibh. Maecenas at molestie erat, ut commodo nisi. Suspendisse sed quam diam. Curabitur tempor pretium erat bibendum efficitur. Sed malesuada vehicula metus, vitae cursus ligula faucibus nec. ",
  },
];
