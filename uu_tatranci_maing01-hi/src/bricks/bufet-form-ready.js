//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "BufetFormReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const BufetFormReady = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function getColumns() {
      return [
        {
          cell: (cellProps) => {
            return <UU5.Forms.Form
              onSave={(opt) => alert(`opt.values:\n${JSON.stringify(opt.values, null, 2)}`)}
              header={<UU5.Bricks.Box content='Vytvorenie nového príspevku' colorSchema='yellow' className='font-size-m' />}
              //footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
            >
              <UU5.Forms.Text name="title" label="Názov" /*placeholder="John"*/ required />
              <UU5.Forms.TextArea name="description" label="Popis" placeholder="Text..." required />
              <UU5.Forms.TextArea name="category" label="Kategória" placeholder="Text..." required />
              <UU5.Forms.TextArea name="videoURL" label="URL adresa videa" placeholder="Text..." required />
              <UU5.Forms.Controls />
            </UU5.Forms.Form>
          },
        },
      ];
    }
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
        <Uu5Tiles.Controller
          data={props.data.itemList}>
          <Uu5Tiles.List
            viewType={"table"}
            rowAlignment={"center"}
            columns={getColumns()}
            headerClassName={CLASS_NAMES.header()}
          />
        </Uu5Tiles.Controller>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default BufetFormReady;
