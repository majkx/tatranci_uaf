//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Calls from "../calls";
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
    function handleSave(dtoIn) {
      console.log(dtoIn.values);
      if (props.method === "update") {
        dtoIn.values.id = props.data.id
        return Calls.updateItem(dtoIn.values).then((dtoOut) => {
          props.handleClose();
          return dtoOut.data;
        })
      } else {
        return Calls.createItem(dtoIn.values).then((dtoOut) => {
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
          onSave={(opt) => { handleSave(opt)}}
          header={<UU5.Bricks.Box content='Vytvorenie nového príspevku' colorSchema='green-rich' className='font-size-m'/>}
          //footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
        >
          <UU5.Forms.Text name="nameOfItem" label="Názov" value= {props.data.nameOfItem ? props.data.nameOfItem : ""}/>
          <UU5.Forms.Text name="itemCategory" label="Popis" value= {props.data.itemCategory ? props.data.itemCategory : ""}/>
          <UU5.Forms.Text name="weight" label="Váha" value= {props.data.weight ? props.data.weight : ""}/>
          <UU5.Forms.Text name="numberOfPieces" label="Počet kusov" value= {props.data.numberOfPieces ? props.data.numberOfPieces : ""}/>
          <UU5.Forms.Text name="price" label="Cena" value= {props.data.price ? props.data.price : ""}/>
          <UU5.Forms.Text name="sellingPrice" label="Predajná cena" value= {props.data.sellingPrice ? props.data.sellingPrice : ""}/>
          <UU5.Forms.Text name="manufacturer" label="Výrobca" value= {props.data.manufacturer ? props.data.manufacturer : ""}/>
          <UU5.Forms.Text name="allergens" label="Alergény" value= {props.data.allergens ? props.data.allergens : ""}/>
          <UU5.Forms.Text name="discount" label="Zľava" value= {props.data.discount ? props.data.discount : ""}/>
          <UU5.Forms.Text name="expirationDate" label="Dátum spotreby" value= {props.data.expirationDate ? props.data.expirationDate : ""}/>
          <UU5.Forms.Text name="dateOfPurchase" label="Dátum nákupu" value= {props.data.dateOfPurchase ? props.data.dateOfPurchase : ""}/>
          <UU5.Forms.Text name="dateOfDelivery" label="Dátum dodania" value= {props.data.dateOfDelivery ? props.data.dateOfDelivery : ""}/>
          <UU5.Forms.Text name="bookingDate" label="Dátum rezervácie" value= {props.data.bookingDate ? props.data.bookingDate : ""}/>
          <UU5.Forms.Text name="numberOfReserved" label="Počet rezervovaných" value= {props.data.numberOfReserved ? props.data.numberOfReserved : ""}/>
          <UU5.Forms.Text name="revenue" label="Zisk" value= {props.data.revenue ? props.data.revenue : ""}/>
          <UU5.Forms.Text name="expenses" label="Náklady" value= {props.data.expenses ? props.data.expenses : ""}/>
          <UU5.Forms.Text name="profit" label="Profit" value= {props.data.profit ? props.data.profit : ""}/>
          <UU5.Forms.File label='Foto' placeholder="jpg/png" size="l" multiple />
          <UU5.Forms.Controls/>
        </UU5.Forms.Form>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default BufetFormReady;
