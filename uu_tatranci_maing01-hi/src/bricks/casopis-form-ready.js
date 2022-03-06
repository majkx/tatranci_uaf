//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CasopisFormReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CasopisFormReady = createVisualComponent({
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
      if (props.method === "update") {
        dtoIn.values.id = props.data.id
        return Calls.updateSchoolMagazine(dtoIn.values).then((dtoOut) => {
          props.handleClose();
          return dtoOut.data;
        })
      } else {
        return Calls.createSchoolMagazine(dtoIn.values).then((dtoOut) => {
          props.handleClose();
          return dtoOut.data;
        })
      }
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
          header={<UU5.Bricks.Box content='Vytvorenie nového príspevku' colorSchema='blue-rich' className='font-size-m' />}
          //footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
        >
          <UU5.Forms.Text name="name" label="Názov" value= {props.data.name ? props.data.name : ""} />
          <UU5.Forms.Text name="magazineNumber" label="Číslo časopisu" value= {props.data.magazineNumber ? props.data.magazineNumber : ""} />
          <UU5.Forms.Text name="numbersOfPages" label="Počet strán" value= {props.data.numbersOfPages ? props.data.numbersOfPages : ""} />
          <UU5.Forms.Text name="titleOfPost" label="Titulok" value= {props.data.titleOfPost ? props.data.titleOfPost : ""} />
          <UU5.Forms.Text name="category" label="Kategória" value= {props.data.category ? props.data.category : ""} />
          <UU5.Forms.Text name="content" label="Url adresa časopisu" value= {props.data.content ? props.data.content : ""} />
          <UU5.Forms.File label='Súbor' placeholder="pdf" size="l" multiple />
          <UU5.Forms.Controls />
        </UU5.Forms.Form>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CasopisFormReady;
