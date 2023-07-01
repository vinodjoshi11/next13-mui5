import LayoutSecondary from "../Layouts/LayoutSecondary";

function withLayoutSecondary(Component) {
  Component.Layout = LayoutSecondary;
  return Component;
}

export default withLayoutSecondary;
