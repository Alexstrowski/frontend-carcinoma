export const getBase64Image = (dataURL) => {
  const extension = getExtension(dataURL);
  const base64Image =
    extension === "png"
      ? dataURL.replace("data:image/png;base64,", "")
      : dataURL.replace("data:image/jpeg;base64,", "");
  return base64Image;
};

export const getExtension = (dataURL) => {
  return dataURL.substring(
    dataURL.indexOf("/") + 1,
    dataURL.indexOf(";base64")
  );
};
