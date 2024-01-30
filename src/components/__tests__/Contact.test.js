import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", ()=>{
    test("should load Contact Us Component and check heading is there or not ", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      
      test("should load Contact Us Component and should check button is there or not", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
      });
      
      test("should load input name inside the contactus component", () => {
          render(<Contact />);
          const input= screen.getByPlaceholderText("name");
          expect(input).toBeInTheDocument();
        });
      
        test("should return 2 textboxes name inside the contactus component", () => {
          render(<Contact />);
          const textboxes= screen.getAllByRole("textbox");
          expect(textboxes.length).toBe(3);
        });
        
})