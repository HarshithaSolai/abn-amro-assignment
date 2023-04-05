import { render } from "@testing-library/react";
import Shimmer from "../Shimmer";
import { SHIMMER_SHOW_CARDS_COUNT } from "../../utils/config";

describe("Shimmer", () => {
  test("renders correct number of CardShimmer components", () => {
    const { getAllByTestId } = render(<Shimmer />);
    const shimmerCards = getAllByTestId("card-shimmer");
    expect(shimmerCards).toHaveLength(SHIMMER_SHOW_CARDS_COUNT);
  });
});
