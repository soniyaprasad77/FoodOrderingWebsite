import sum from "../Sum";

test("Sum functions should result in sum of two numbers that are given in the arguments", ()=>{
    const result = sum(4,5);

    // assertion
    expect(result).toBe(9);
}
    )