//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import RadaFormReady from "./rada-form-ready";
import radaFormReady from "./rada-form-ready";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "RadaForm",
  //@@viewOff:statics
};

export const RadaForm = createComponent({
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
    function handleClick(){
      modalRef.current.open({
      header: " ",
      content: (<RadaFormReady data={data} handleClose={handleClose}/> ),
    })
    }
    function handleClose(){
      console.log("text")
      modalRef.current.close()
    }
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

    return (
      <>
        <UU5.Bricks.Modal ref={modalRef}/>
        <UU5.Bricks.Button onClick={() => handleClick()} > Vytvoriť príspevok </UU5.Bricks.Button>
      </>
    )

    //@@viewOff:render
  },
});

export default RadaForm;
