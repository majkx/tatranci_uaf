//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";

import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:static
  displayName: Config.TAG + "Left",
  //@@viewOff:static
};
const CLASS_NAMES = {
  logo: () => Config.Css.css`
    max-width: 100%;
    height: auto;
  `,
};

export const  Left = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.App.Left className={CLASS_NAMES.logo()}
        {...props}
        logoProps={{
          backgroundColor: UU5.Environment.colors["blue-grey"].c50,
          backgroundColorTo: UU5.Environment.colors["blue-grey"].c500,
          title: "SPŠka do vrecka",
          companyLogo: "../assets/spskadovrecka.png",
        }}
        aboutItems={[{ content: <UU5.Bricks.Lsi lsi={Lsi.left.about}/>, href: "about" }]}
        helpHref={null}
      >
        <Plus4U5.App.MenuTree
          borderBottom
          // NOTE Item "id" equals to useCase so that item gets automatically selected when route changes (see spa-autheticated.js).
          items={[
            { id: "home", href: "home", content: "Úvod"},
            { id: "skolskarada", href: "skolskaRada", content: "Školská rada"},
            { id: "skolskybufet", href: "skolskyBufet", content: "Školský bufet"},
            { id: "skolskatelevizia", href: "skolskaTelevizia", content: "Školská televízia"},
            { id: "skolskycasopis", href: "skolskyCasopis", content: "Školský časopis"},
            { id: "kosik", href: "kosik", content: "Košík"},
            { id: "vsetkyObjednavky", href: "vsetkyObjednavky", content: "Všetky objednávky"},
          ]}
        />
      </Plus4U5.App.Left>
    );
    //@@viewOff:render
  },
});

export default Left;
