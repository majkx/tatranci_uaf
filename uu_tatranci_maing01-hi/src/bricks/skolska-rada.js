//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject} from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import SkolskaRadaReady from "./skolska-rada-ready";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SkolskaRada",
  //@@viewOff:statics
};

export const SkolskaRada = createComponent({
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
        load: loadArticles
      }
    })
    //@@viewOff:hooks

    //@@viewOn:private
    function loadArticles(){
      return Calls.listArticles();
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
        console.log(data.itemList);
        data.itemlist = data.itemList.sort((a, b) => new Date(b.sys.cts) - new Date(a.sys.cts));
        let datalist
        if (props.showOnlyOne == true){
          datalist = {itemList: [data.itemList[0]]}
        } else
          datalist = {itemList: data.itemList}
        return <SkolskaRadaReady data={datalist}/>
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

export default SkolskaRada;
