function ImagesGroup(propsImg) {
  console.log(propsImg);
  return (
    <img src={propsImg.src} alt={propsImg.alt} className={propsImg.className} />
  );
}
export default ImagesGroup;
