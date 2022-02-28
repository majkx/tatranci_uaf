//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TeleviziaFormReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const TeleviziaFormReady = createVisualComponent({
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
      return Calls.createReport(dtoIn.values).then((dtoOut)=>{
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
          onSave={(opt) => {handleSave(opt)}}
          header={<UU5.Bricks.Box content='Vytvorenie nového príspevku' colorSchema='yellow-rich' className='font-size-m' />}
          //footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
        >
          <UU5.Forms.Text name="titleOfPost" label="Názov" /*placeholder="John"*/ required />
          <UU5.Forms.Text name="desc" label="Popis" placeholder="Text..." required />
          <UU5.Forms.Text name="category" label="Kategória" placeholder="Text..." required />
          <UU5.Forms.Text name="videoURL" label="URL adresa videa" placeholder="Text..." required />
          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default TeleviziaFormReady;
