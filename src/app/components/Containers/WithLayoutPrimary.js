import WithHeader from "../Layouts/WithHeader";

function withLayoutPrimary(Component) {
  Component.Layout = WithHeader;
  return Component;
}

export default withLayoutPrimary;
