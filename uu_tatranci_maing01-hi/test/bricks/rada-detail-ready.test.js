import UU5 from "uu5g04";
import UuTatranci from "uu_tatranci_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuTatranci.Bricks.RadaDetailReady`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuTatranci.Bricks.RadaDetailReady />);
    expect(wrapper).toMatchSnapshot();
  });
});