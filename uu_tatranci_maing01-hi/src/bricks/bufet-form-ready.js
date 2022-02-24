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
        onSave={(opt) => alert(`opt.values:\n${JSON.stringify(opt.values, null, 2)}`)}
        header={<UU5.Bricks.Box content='Vytvorenie nového príspevku' colorSchema='green' className='font-size-m' />}
        //footer={<UU5.Bricks.Box content='Unicorn 2018' colorSchema='grey' className='font-size-xs' />}
      >
        <UU5.Forms.Text name="title" label="Názov" /*placeholder="John"*/ required />
        <UU5.Forms.Text name="category" label="Popis" placeholder="Text..." required />
        <UU5.Forms.Text name="weight" label="Váha" placeholder="Text..." required />
        <UU5.Forms.Text name="number" label="Počet kusov" placeholder="Text..." required />
        <UU5.Forms.Text name="price" label="Cena" placeholder="Text..." required />
        <UU5.Forms.Text name="sellingPrice" label="Predajná cena" placeholder="Text..." required />
        <UU5.Forms.Text name="manufacturer" label="Výrobca" placeholder="Text..." required />
        <UU5.Forms.Text name="allergens" label="Alergény" placeholder="Text..." required />
        <UU5.Forms.Text name="discount" label="Zľava" placeholder="Text..." required />
        <UU5.Forms.Text name="expirationDate" label="Dátum spotreby" placeholder="Text..." required />
        <UU5.Forms.Text name="dateOfPurchase" label="Dátum nákupu" placeholder="Text..." required />
        <UU5.Forms.Text name="dateOfDelivery" label="Dátum dodania" placeholder="Text..." required />
        <UU5.Forms.Text name="bookingDate" label="Dátum rezervácie" placeholder="Text..." required />
        <UU5.Forms.Text name="numberOfReserved" label="Počet rezervovaných" placeholder="Text..." required />
        <UU5.Forms.Text name="revenue" label="Zisk" placeholder="Text..." required />
        <UU5.Forms.Text name="expenses" label="Náklady" placeholder="Text..." required />
        <UU5.Forms.Text name="profit" label="Profit" placeholder="Text..." required />
        <UU5.Forms.File label='Foto' placeholder="jpg/png" /*feedback="warning" message="warning message"*/ size="l" multiple />
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default BufetFormReady;
