//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "DeleteEditorFormReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const DeleteEditorFormReady = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function handleSave(dtoIn) {
      console.log(dtoIn.values);
      dtoIn.values.id = props.data.id
      return Calls.deleteEditor(dtoIn.values).then((dtoOut) => {
        props.handleClose();
        return dtoOut.data;
      })
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
      background-color: #66BB6A;
      color: white;
      `,
      main: () => Config.Css.css`
      padding-left: 12px;
      padding-right: 12px;
      `,
    };
    const attrs = UU5.Common.VisualComponent.getAttrs(props, CLASS_NAMES.main());
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Forms.Form
          onSave={(opt) => { handleSave(opt)}}
          header={<UU5.Bricks.Box content='Mazanie editora' colorSchema='grey-rich' className='font-size-m'/>}
          //footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
        >
          <UU5.Forms.Text name="newAuthorUuId" label="uuId nového autora" value= {props.data.newAuthorUuId ? props.data.newAuthorUuId : ""}/>
          <UU5.Forms.Controls/>
        </UU5.Forms.Form>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default DeleteEditorFormReady;
