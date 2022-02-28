//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SkolskyBufetReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const SkolskyBufetReady = createVisualComponent({
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
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.nameOfItem} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Názov produktu </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.weight} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Váha </UU5.Bricks.Span>
        },
        {
        cell: (cellProps) => {
        return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.numberOfPieces} </UU5.Bricks.Span>
      },
        header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Počet kusov </UU5.Bricks.Span>
    },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.price} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Cena </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.allergens} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Alergény </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.authorName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Autor </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Button onClick={ ()=> handleRemove(cellProps)} className={CLASS_NAMES.buttons()}> Zmazať produkt </UU5.Bricks.Button>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Detail </UU5.Bricks.Span>
        }
      ];
    }
    function handleRemove(dtoIn) {
      return Calls.deleteItem({ id: dtoIn.data.id }).then((dtoOut) => {
        return dtoOut.data;
      })
      console.log(dtoIn);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
      background-color: #66BB6A;
      color: white;
      letter-spacing: 1.5px;
      font-weight: bold;
      padding-left: 6px;
      padding-right: 6px;
      `,
      main: () => Config.Css.css`
      padding-left: 12px;
      padding-right: 12px;
      `,
      body: () => Config.Css.css`
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
        {/*<UU5.Bricks.Button onClick={ ()=> handleClick("rada-form") } className={CLASS_NAMES.body()}> Pridať produkt </UU5.Bricks.Button>*/}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default SkolskyBufetReady;
