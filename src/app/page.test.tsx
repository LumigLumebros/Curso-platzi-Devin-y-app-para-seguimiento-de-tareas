import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("muestra el nombre de la app", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "ShipLog" }),
    ).toBeDefined();
  });
});
