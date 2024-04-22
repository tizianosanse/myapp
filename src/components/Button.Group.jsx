function ButtonGroup(propsGroup) {
  console.log(propsGroup);
  return (
    <>
      <button className={propsGroup.className}>&lt; &gt;</button>
      <input type="text" />
    </>
  );
}
export default ButtonGroup;
