import Chevrons from "../assets/chevrons.png";
import ChevronsDark from "../assets/chevrons-dark.png";
import Silverware from "../assets/silverware.png";
import SilverwareDark from "../assets/silverware-dark.png";
import Cake from "../assets/cake.png";
import CakeDark from "../assets/cake-dark.png";
import Crown from "../assets/crown.png";
import CrownDark from "../assets/crown-dark.png";
import Boat from "../assets/boat.png";
import BoatDark from "../assets/boat-dark.png";
import Snorkel from "../assets/snorkel.png";
import SnorkelDark from "../assets/snorkel-dark.png";
import Lightning from "../assets/lightning.png";
import LightningDark from "../assets/lightning-dark.png";
import Skull from "../assets/skull.png";
import SkullDark from "../assets/skull-dark.png";

export const runeData = {
  totalPoints: 6,
  spentPoints: 0,
  paths: [
    {
      title: "TALENT PATH 1",
      pathId: 1,
      runes: [
        {
          runeId: "chevrons",
          name: "chevrons",
          runeOrder: 1,
          rune: Chevrons,
          darkRune: ChevronsDark,
          pointAdded: false,
        },
        {
          runeId: "silverware",
          name: "silverware",
          runeOrder: 2,
          rune: Silverware,
          darkRune: SilverwareDark,
          pointAdded: false,
        },
        {
          runeId: "cake",
          name: "cake",
          runeOrder: 3,
          rune: Cake,
          darkRune: CakeDark,
          pointAdded: false,
        },
        {
          runeId: "crown",
          name: "crown",
          runeOrder: 4,
          rune: Crown,
          darkRune: CrownDark,
          pointAdded: false,
        },
      ],
    },
    {
      title: "TALENT PATH 2",
      pathId: 2,
      runes: [
        {
          runeId: "boat",
          name: "boat",
          runeOrder: 1,
          rune: Boat,
          darkRune: BoatDark,
          pointAdded: false,
        },
        {
          runeId: "snorkel",
          name: "snorkel",
          runeOrder: 2,
          rune: Snorkel,
          darkRune: SnorkelDark,
          pointAdded: false,
        },
        {
          runeId: "lightning",
          name: "lightning",
          runeOrder: 3,
          rune: Lightning,
          darkRune: LightningDark,
          pointAdded: false,
        },
        {
          runeId: "skull",
          name: "skull",
          runeOrder: 4,
          rune: Skull,
          darkRune: SkullDark,
          pointAdded: false,
        },
      ],
    },
  ],
};
