import UU5 from "uu5g04";
import UuTatranci from "uu_tatranci_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuTatranci.Bricks.ReservationClosed`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuTatranci.Bricks.ReservationClosed />);
    expect(wrapper).toMatchSnapshot();
  });
});
