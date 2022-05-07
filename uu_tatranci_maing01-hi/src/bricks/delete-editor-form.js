//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import DeleteEditorFormReady from "./delete-editor-form-ready";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "DeleteEditorForm",
  //@@viewOff:statics
};

export const DeleteEditorForm = createComponent({
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
      return Calls.deleteEditor();
    }

    let { state, data } = dataResult;

    function handleClick() {
      modalRef.current.open({
        header: " ",
        content: (<DeleteEditorFormReady data={data} handleClose={handleClose}/>),
      })
    }

    function handleClose() {
      console.log("text")
      modalRef.current.close()
    }
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

    return (
      <>
        <UU5.Bricks.Modal ref={modalRef}/>
        <UU5.Bricks.Button onClick={() => handleClick()} className={CLASS_NAMES.buttons()}> Vytvoriť produkt </UU5.Bricks.Button>
      </>
    )
    //@@viewOff:render
  },
});

export default DeleteEditorForm;
