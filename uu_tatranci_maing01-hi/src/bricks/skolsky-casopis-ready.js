//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Calls from "../calls";
import CasopisFormReady from "./casopis-form-ready";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SkolskyCasopisReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const SkolskyCasopisReady = createComponent({
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
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.numbersOfPages} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Počet strán </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.magazineNumber} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Číslo časopisu </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Link className={CLASS_NAMES.body()} href={cellProps.data.content}  target={"_blank"}> Časopis </UU5.Bricks.Link>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Obsah </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.authorName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Autor </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            if (props.profileList.includes("Executives")) {
            return (
              <>
                <UU5.Bricks.Button onClick={() => handleRemove(cellProps)} className={CLASS_NAMES.buttons()}> Zmazať príspevok </UU5.Bricks.Button> <br/> <br/>
                <UU5.Bricks.Modal ref={modalRef}/>
                <UU5.Bricks.Button onClick={() => handleUpdate(cellProps.data)} className={CLASS_NAMES.body()}> Aktualizovať príspevok </UU5.Bricks.Button>
              </>
            )} else return null
          },
        }
      ];
    }
    function handleRemove(dtoIn) {
      return Calls.deleteSchoolMagazine({ id: dtoIn.data.id }).then((dtoOut) => {
        return dtoOut.data;
      })
      console.log(dtoIn);
    }

    let modalRef = useRef();
    function handleUpdate(data){
      modalRef.current.open({
        header: " ",
        content: (<CasopisFormReady data={data} handleClose={handleClose} method={"update"}/> ),
      })
      console.log(data);

    }
    function handleClose(){
      console.log("text")
      modalRef.current.close()
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
      background-color: #2196F3;
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
        {/*<UU5.Bricks.Button onClick={ ()=> handleClick("rada-form") } className={CLASS_NAMES.body()}> Vytvoriť príspevok </UU5.Bricks.Button>*/}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default SkolskyCasopisReady;
