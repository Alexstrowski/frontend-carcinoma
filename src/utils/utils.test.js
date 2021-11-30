import { getBase64Image, getExtension } from "../utils";
describe("Test in utils", () => {
  test("Must return the correct extension", () => {
    const jpegImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wB";
    const pngImage = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wB";

    expect(getExtension(jpegImage)).toBe("jpeg");
    expect(getExtension(pngImage)).toBe("png");
  });

  test("Must return the base64 string", () => {
    const jpegImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wB";
    expect(getBase64Image(jpegImage)).toBe("/9j/4AAQSkZJRgABAQAAAQABAAD/2wB");
  });
});
