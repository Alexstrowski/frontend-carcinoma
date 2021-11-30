import { render, screen } from "@testing-library/react";
import UploadFileContainer from "./UploadFileContainer";
import user from "@testing-library/user-event";
import App from "../App";
import Image from "./Image";
import { Result } from ".";

test("Must render UploadFileContainer", () => {
  render(<UploadFileContainer />);
});

test("should upload the file", async () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  render(<App />);
  const input = screen.getByTestId("fileInput");
  user.upload(input, file);

  expect(input.files[0]).toStrictEqual(file);
  expect(input.files).toHaveLength(1);
});

test("Render image", async () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  render(<Image image={file} />);
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("alt", "hello.png");
});

test("Should render the results", () => {
  const payload = {
    bcc: 0.6,
    nobcc: 0.4,
  };
  render(<Result prediction={payload} />);
  expect(
    screen.queryByText(/Es carcinoma basocelular: 60 %/i)
  ).toBeInTheDocument();
  expect(
    screen.queryByText(/No es carcinoma basocelular: 40 %/i)
  ).toBeInTheDocument();
});
