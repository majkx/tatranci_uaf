//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import SpravaUser from "../bricks/sprava-user";
import SpravaAdmin from "../bricks/sprava-admin";
import SpravaEditor from "../bricks/sprava-editor";
import SpravaSeller from "../bricks/sprava-seller";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "StrankaKosik",
  //@@viewOff:statics
};

const CLASS_NAMES = {
  welcomeRow: () => Config.Css.css`
    padding: 56px 0 20px;
    max-width: 624px;
    margin: 0 auto;
    text-align: center;

    ${UU5.Utils.ScreenSize.getMinMediaQueries("s", `text-align: left;`)}

    .uu5-bricks-header {
      margin-top: 8px;
    }

    .plus4u5-bricks-user-photo {
      margin: 0 auto;
    }
  `,
  header: () => Config.Css.css`
       padding-left: 12px;
       padding-right: 12px;
      `,
};

export const StrankaVsetkyObjedenavky = createVisualComponent({
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
    const attrs = UU5.Common.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <UU5.Bricks.Heading content = { "Users"} className={CLASS_NAMES.header()}/>
        <SpravaUser/>
        <UU5.Bricks.Heading content = { "Admins"} className={CLASS_NAMES.header()}/>
        <SpravaAdmin/>
        <UU5.Bricks.Heading content = { "Editors"} className={CLASS_NAMES.header()}/>
        <SpravaEditor/>
        <UU5.Bricks.Heading content = { "Sellers"} className={CLASS_NAMES.header()}/>
        <SpravaSeller/>
      </div>
    );

    //@@viewOff:render
  },
});

export default StrankaVsetkyObjedenavky;
