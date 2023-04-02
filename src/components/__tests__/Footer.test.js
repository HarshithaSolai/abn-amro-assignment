import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";
import { GITHUB_LINK } from "../../utils/config";

test("should render GitHub link with correct URL and text content", () => {
  const { getByTestId } = render(<Footer />);
  const githubLink = getByTestId("github-link");

  expect(githubLink).toHaveAttribute("href", GITHUB_LINK);
  expect(githubLink.textContent).toEqual("Check out the code at GitHub");
});
