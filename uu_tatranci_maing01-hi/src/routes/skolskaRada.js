//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";

import SkolskaRada from "../bricks/skolska-rada";
import RadaForm from "../bricks/rada-form";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "StrankaSkolskaRada",
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
};

export const StrankaSkolskaRada = createVisualComponent({
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
    //if (props.profileList.includes("Executives")) {
      return (
        <div {...attrs}>
          <SkolskaRada/>
          <RadaForm/>
        </div>
      );
    /*} else {
      return (
        <div {...attrs}>
          <SkolskaRada/>
        </div>
      );
    }*/

    //@@viewOff:render
  },
});

export default StrankaSkolskaRada;
