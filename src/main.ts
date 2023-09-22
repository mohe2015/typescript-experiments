// https://github.com/microsoft/TypeScript/pull/47109

const data: {
    a: ["hi", 1],
    b: [2, "jo"]
 } = {
    a: ["hi", 1],
    b: [2, "jo"]
}

type RecordMap = {
    a: ["hi", 1],
    b: [2, "jo"]
};
type UnionRecord<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: [RecordMap[P]["0"], RecordMap[P]["1"]] }[K];
type UnionRecord2<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P] }[K];

const a: UnionRecord<"a"> = ["hi", 1];
const a1: UnionRecord2<"a"> = a;

