import React from "react";
import { render } from "@testing-library/react";
import Episodes from "../Episodes";
import { EpisodesContext } from "../../utils/context/EpisodesContext";

describe("Episodes", () => {
  const mockEpisodesData = {
    1: [
      {
        id: 1,
        name: "Episode 1",
      },
      {
        id: 2,
        name: "Episode 2",
      },
    ],
    2: [
      {
        id: 3,
        name: "Episode 3",
      },
      {
        id: 4,
        name: "Episode 4",
      },
    ],
  };

  it("renders the correct number of episodes", () => {
    const { getAllByTestId } = render(
      <Episodes seasonId={1} />,
      {
        wrapper: ({ children }) => (
          <EpisodesContext.Provider
            value={{ episodesData: mockEpisodesData }}
          >
            {children}
          </EpisodesContext.Provider>
        ),
      }
    );
    const episodes = getAllByTestId("episode");
    expect(episodes.length).toBe(2);
  });

});
