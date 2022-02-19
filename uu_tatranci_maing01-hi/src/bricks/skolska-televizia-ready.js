//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SkolskaTeleviziaReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const SkolskaTeleviziaReady = createVisualComponent({
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
            return <UU5.Bricks.Span> {cellProps.data.titleOfPost} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Názov </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span> {cellProps.data.desc} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Popis </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.YoutubeVideo src={cellProps.data.videoURL} size = "sm"/>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Video </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span> {cellProps.data.authorName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Autor </UU5.Bricks.Span>
        },

      ];
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
       background-color: #FFEB3B;
       color: black;
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

export default SkolskaTeleviziaReady;
