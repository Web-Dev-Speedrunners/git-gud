import { makeStyles } from "@material-ui/styles";
import { TreflePlantCarouselHeight } from "../../constants/dimensions";
import { THEME_COLOR } from "../../constants/theme";

export const useTreflePlantInfoStyles = makeStyles({
  container: {
    height: TreflePlantCarouselHeight,
    backgroundColor: THEME_COLOR.Primary,
    overflow: "auto",
  },
  title: {
    margin: 0,
    paddingTop: 16,
    paddingRight: 20,
    paddingLeft: 20,
    color: THEME_COLOR.White,
    textAlign: "right",
  },
  commonAttributesContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  commonAttributeKey: {
    color: THEME_COLOR.White,
    fontWeight: "normal",
  },
  commonAttributeValue: {
    color: THEME_COLOR.White,
    fontWeight: "lighter",
  },
  attributeItemContainer: {
    paddingBottom: "12px",
  },
  synonymContainer: {
    marginTop: "auto",
  },
  synonymTitle: {
    paddingTop: "30px",
    paddingBottom: "16px",
    color: THEME_COLOR.White,
    textAlign: "right",
  },
  synonymListItem: {
    backgroundColor: THEME_COLOR.Primary,
    borderWidth: 0,
    fontWeight: "lighter",
    textAlign: "right",
    color: THEME_COLOR.White,
  },
})