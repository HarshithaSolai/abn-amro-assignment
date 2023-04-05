import { render } from "@testing-library/react";
import ShowCard from "../ShowCard";

describe("ShowCard component", () => {
  const props = {
    name: "Test Show",
    language: "English",
    image: { medium: "https://example.com/image.jpg" },
    rating: { average: 7.8 },
    genres: ["Comedy", "Drama"],
  };

  it("renders correctly with props", () => {
    const { getByTestId } = render(<ShowCard {...props} />);
    const showCard = getByTestId("show-card");
    expect(showCard).toBeInTheDocument();

    const name = getByTestId("show-name");
    expect(name).toHaveTextContent(props.name);

    const language = getByTestId("show-language");
    expect(language).toHaveTextContent(props.language);

    const image = getByTestId("show-image");
    expect(image).toHaveAttribute("src", props.image.medium);

    const rating = getByTestId("show-rating");
    expect(rating).toHaveTextContent(props.rating.average);

    const genres = getByTestId("show-genres");
    expect(genres).toHaveTextContent(props.genres.join(", "));
  });

  it("renders N/A when rating is null", () => {
    const { getByTestId } = render(<ShowCard {...props} rating={{}} />);
    const rating = getByTestId("show-rating");
    expect(rating).toHaveTextContent("N/A");
  });
});
