import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    mobileLittle: "(max-width: 400px)",
    mobile: "(max-width: 991px)",
    mobileButton: "(max-width: 445px)",
    ForText: "(max-width: 930px)",
    ForText1: "(max-width: 890px)",
    ForText2: "(max-width: 610px)",
    ForText3: "(max-width: 550px)",
    ForText4: "(max-width: 490px)",
    ForText5: "(max-width: 400px)",
    tablet: "(max-width: 1300px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
