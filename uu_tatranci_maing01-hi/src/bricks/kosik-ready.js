//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "KosikReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const KosikReady = createVisualComponent({
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
            console.log(cellProps)
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.productName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Názov produktu </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span> {cellProps.data.productCount} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Počet kusov </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span> {cellProps.data.productPrice} € </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Cena </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span> {cellProps.data.productId} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Id produktu </UU5.Bricks.Span>
        }

      ];
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
       background-color: grey;
       color: white;
      `,
      main: () => Config.Css.css`
      padding-left: 12px;
      padding-right: 12px;
      `,
      body: () => Config.Css.css`
       padding-left: 12px;
       padding-right: 12px;
      `,
    };
    const attrs = UU5.Common.VisualComponent.getAttrs(props, CLASS_NAMES.main());
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(
      props,
      STATICS
    );
    console.log(props.data)
    return currentNestingLevel ? (
      <div {...attrs}>
        <Uu5Tiles.Controller
          data={props.data.products}>
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

export default KosikReady;
