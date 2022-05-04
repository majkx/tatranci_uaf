//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import ReservationInitialReady from "./reservation-initial-ready";
import RouteHelper from "../route-helper";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ReservationInitial",
  //@@viewOff:statics
};

export const ReservationInitial = createComponent({
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
        load: loadReservationsInitial
      }
    })
    //@@viewOff:hooks

    //@@viewOn:private
    function loadReservationsInitial(){
      return Calls.listReservationsInitial();
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
        return <ReservationInitialReady data={data} profileList={data.profileList}/>
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

export default ReservationInitial;
