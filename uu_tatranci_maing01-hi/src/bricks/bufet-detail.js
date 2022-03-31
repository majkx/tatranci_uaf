//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import BufetDetailReady from "./bufet-detail-ready";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "BufetDetail",
  //@@viewOff:statics
};

export const BufetDetail = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    let modalRef = useRef();
    let dataResult = useDataObject({
      handlerMap: {
        load: loadItems
      }
    })
    //@@viewOff:hooks

    //@@viewOn:private
    function loadItems() {
      return Calls.listItems();
    }

    let { state, data } = dataResult;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      main: () => Config.Css.css`
      padding-left: 12px;
      padding-right: 12px;
      `,
      buttons: () => Config.Css.css`
       margin-left: 12px;
       margin-right: 12px;
      `,
    };
    const attrs = UU5.Common.VisualComponent.getAttrs(props, CLASS_NAMES.main());
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );

    switch (state) {
      case "ready":
        return (
          <>
            <UU5.Bricks.Modal ref={modalRef}/>
            <BufetDetailReady data={props.data}/>
          </>
        )
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

export default BufetDetail;
