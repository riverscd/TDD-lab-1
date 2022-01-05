const translate = require("./piglatin");

test("apple should become appleway", () => {
    expect(translate("apple")).toEqual("appleway");
});

test("else should become elseway", () => {
    expect(translate("else")).toEqual("elseway");
});

test("ice should become iceway", () => {
    expect(translate("ice")).toEqual("iceway");
});

test("owl should become owlway", () => {
    expect(translate("owl")).toEqual("owlway");
});

test("under should become underway", () => {
    expect(translate("under")).toEqual("underway");
});

test("giraffe should become iraffegay", () => {
    expect(translate("giraffe")).toEqual("iraffegay");
});

test("corn should become orncay", () => {
    expect(translate("corn")).toEqual("orncay");
});

test("Cat should become atcay", () => {
    expect(translate("Cat")).toEqual("atcay");
});

test("grey should become eygray", () => {
    expect(translate("grey")).toEqual("eygray");
});

test("school should become oolschay", () => {
    expect(translate("school")).toEqual("oolschay");
});