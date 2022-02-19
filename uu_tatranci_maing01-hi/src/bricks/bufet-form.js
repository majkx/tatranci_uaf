//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject} from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import BufetFormReady from "./bufet-form-ready";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "BufetForm",
  //@@viewOff:statics
};

export const BufetForm = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    let dataResult = useDataObject({
      handlerMap: {
        load: loadItems
      }
    })
    //@@viewOff:hooks

    //@@viewOn:private
    function loadItems(){
      return Calls.listItems();
    }

    let {state, data} = dataResult;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );

    switch(state){
      case "ready":
        return <BufetFormReady data={data}/>
        break;
      case "pending":
      case "pendingNoData":
      default:
        return <UU5.Bricks.Loading/>
        break;
    }
    //@@viewOff:render
  },
});

export default BufetForm;
