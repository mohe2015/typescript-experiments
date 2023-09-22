// https://github.com/microsoft/TypeScript/pull/47109

const data: {
    a: ["hi", 1],
    b: [2, "jo"]
 } = {
    a: ["hi", 1],
    b: [2, "jo"]
}

type RecordMap = typeof data
type UnionRecordBoth<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: [UnionRecord0<P>, UnionRecord1<P>] }[K];
type UnionRecord<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P] }[K];
type UnionRecord0<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P]["0"] }[K];
type UnionRecord1<K extends keyof RecordMap = keyof RecordMap> = { [P in K]: RecordMap[P]["1"] }[K];

function magic<P extends keyof typeof data>(input: RecordMap[P]) {
    // you can see that this is wrong, but why?
    const aboth: UnionRecordBoth<P> = ["hi", 1];
    const a: UnionRecord<P> = ["hi", 1];

    const a0: UnionRecord0<P> = "hi";
    const a1: UnionRecord1<P> = 1;

    const ba: UnionRecord<P> = [a0, a1];
    const baboth: UnionRecordBoth<P> = [a0, a1];
}