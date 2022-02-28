//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import RouteHelper from "../route-helper";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SkolskaRadaReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const SkolskaRadaReady = createVisualComponent({
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
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.name} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Názov </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.content} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Popis </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.authorName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Autor </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return (
            <>
              <UU5.Bricks.Button onClick={() => handleRemove(cellProps)} className={CLASS_NAMES.buttons()}> Zmazať príspevok </UU5.Bricks.Button> <br/> <br/>
              {/*<UU5.Bricks.Button onClick={() => handleUpdate(cellProps)} className={CLASS_NAMES.body()}> Aktualizovať príspevok </UU5.Bricks.Button>*/}
            </>
            )
          },
        },
      ];
    }

    function handleRemove(dtoIn) {
      return Calls.deleteArticle({ id: dtoIn.data.id }).then((dtoOut) => {
        return dtoOut.data;
      })
      console.log(dtoIn);
    }

    //function handleUpdate(dtoIn) {
    //  return Calls.updateArticle({ id: dtoIn.data.id }).then((dtoOut)=>{
    //    return dtoOut.data;
    //  })
    //  console.log(dtoIn);
    //}

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
       background-color: red;
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
//return JSON.stringify(props.data.itemList)
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

export default SkolskaRadaReady;
