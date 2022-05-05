//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import Uu5Tiles from "uu5tilesg02";
import RouteHelper from "../route-helper";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SpravaUserReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const SpravaUserReady = createVisualComponent({
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
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.firstName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Meno </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.lastName} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Priezvisko </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.email} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> E-mail </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return <UU5.Bricks.Span className={CLASS_NAMES.body()}> {cellProps.data.telephoneNumber} </UU5.Bricks.Span>
          },
          header: <UU5.Bricks.Span className={CLASS_NAMES.header()}> Mobil </UU5.Bricks.Span>
        },
        {
          cell: (cellProps) => {
            return (
              <>
                <UU5.Bricks.Button onClick={() => handleCreateA(cellProps)} className={CLASS_NAMES.buttons()}> Admin </UU5.Bricks.Button> <br/><br/>
                <UU5.Bricks.Button onClick={() => handleCreateE(cellProps)} className={CLASS_NAMES.buttons()}> Editor </UU5.Bricks.Button> <br/><br/>
                <UU5.Bricks.Button onClick={() => handleCreateS(cellProps)} className={CLASS_NAMES.buttons()}> Seller </UU5.Bricks.Button> <br/><br/>
                <UU5.Bricks.Button onClick={() => handleDelete(cellProps.data.id)} className={CLASS_NAMES.buttons()}> Odstrániť používateľa </UU5.Bricks.Button>
              </>
            )
          },
        },
      ];

    }

    function handleCreateA(dtoIn) {
      console.log(dtoIn)
      return Calls.createAdmin({
        uuId: dtoIn.data.uuId,
        email: dtoIn.data.email,
        firstName: dtoIn.data.firstName,
        lastName: dtoIn.data.lastName,
        telephoneNumber: dtoIn.data.telephoneNumber,
        credit: dtoIn.data.credit,
        penalties: dtoIn.data.penalties,
        rfidNumber: dtoIn.data.rfidNumber,
      }).then((dtoOut) => {
        props.handleClose();
        console.log(dtoIn);
        return dtoOut.data;
      })
    }

    function handleCreateE(dtoIn) {
      console.log(dtoIn)
      return Calls.createEditor({
        uuId: dtoIn.data.uuId,
        email: dtoIn.data.email,
        firstName: dtoIn.data.firstName,
        lastName: dtoIn.data.lastName,
        telephoneNumber: dtoIn.data.telephoneNumber,
        credit: dtoIn.data.credit,
        penalties: dtoIn.data.penalties,
        rfidNumber: dtoIn.data.rfidNumber,
      }).then((dtoOut) => {
        props.handleClose();
        console.log(dtoIn);
        return dtoOut.data;
      })
    }

    function handleCreateS(dtoIn) {
      console.log(dtoIn)
      return Calls.createSeller({
        uuId: dtoIn.data.uuId,
        email: dtoIn.data.email,
        firstName: dtoIn.data.firstName,
        lastName: dtoIn.data.lastName,
        telephoneNumber: dtoIn.data.telephoneNumber,
        credit: dtoIn.data.credit,
        penalties: dtoIn.data.penalties,
        rfidNumber: dtoIn.data.rfidNumber,
      }).then((dtoOut) => {
        props.handleClose();
        console.log(dtoIn);
        return dtoOut.data;
      })
    }

    function handleDelete(dtoIn) {
      console.log(dtoIn)
      return Calls.deleteUser({ id: dtoIn }).then((dtoOut) => {
        props.handleClose();
        console.log(dtoIn);
        return dtoOut.data;
      })
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const CLASS_NAMES = {
      header: () => Config.Css.css`
       background-color: grey;
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

    console.log(props.data)
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

export default SpravaUserReady;
