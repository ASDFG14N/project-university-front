/* eslint-disable react/prop-types */
function Container(props) {
  const { children, margin } = props;
  return <div className={`w-[95%] mx-auto ${margin? "mt-44" : ""}`}>{children}</div>;
}

export default Container;
