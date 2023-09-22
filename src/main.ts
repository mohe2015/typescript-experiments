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

type UnionRecordBoth<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: [RecordMap[P]["0"], RecordMap[P]["1"]] }[K];
type UnionRecord<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P] }[K];
type UnionRecord0<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P]["0"] }[K];
type UnionRecord1<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P]["1"] }[K];

const aboth: UnionRecordBoth<"a"|"b"> = ["hi", 1];
const a: UnionRecord<"a"|"b"> = aboth;

const a0: UnionRecord0<"a"|"b"> = "hi";
const a1: UnionRecord1<"a"|"b"> = 1;

const ba: UnionRecord<"a"|"b"> = [a0, a1];
const baboth: UnionRecordBoth<"a"|"b"> = [a0, a1];
