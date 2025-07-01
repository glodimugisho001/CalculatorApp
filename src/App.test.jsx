import {render, screen} from "@testing-library/react"
import App from "./App"
import { expect } from "vitest";

// eslint-disable-next-line no-undef
test("verifions si le titre de l'app existe", ()=>{
  render(<App/>);

  const TitreGet=screen.getByText("Simplest Working Calculator")
  expect(TitreGet).toBeInTheDocument()
})

// eslint-disable-next-line no-undef
test("verification du button multiply", ()=>{
  render(<App/>)
  const buttonget=screen.getByText("multiply")
  expect(buttonget).toBeInTheDocument()
})