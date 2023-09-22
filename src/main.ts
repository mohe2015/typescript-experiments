// https://github.com/microsoft/TypeScript/pull/47109

const data: {
    a: ["hi", 1],
    b: [2, "jo"]
 } = {
    a: ["hi", 1],
    b: [2, "jo"]
}

type RecordMap = typeof data
type UnionRecordBoth<K extends keyof RecordMap> = { [P in keyof RecordMap]: [UnionRecord<P>["0"], UnionRecord<P>["1"]] }[K];
type UnionRecord<K extends keyof RecordMap> = { [P in keyof RecordMap]: RecordMap[P] }[K];

type test = ["hi", 1] | [2, "jo"]
type JO = UnionRecordBoth<"a"|"b">
type JOa = UnionRecordBoth<"a">
type JOb = UnionRecordBoth<"b">
type JOc<C extends keyof typeof data> = UnionRecordBoth<C>

let a: JOc<"a"|"b"> = [] as any
if (a[0] === "hi") {
    let type = a[1]
}

function magic<P extends keyof typeof data>(input: UnionRecord<P>): UnionRecord<P> {
    // you can see that this is wrong, but why?
    const aboth: UnionRecordBoth<P> = input;
    const wfwef: UnionRecord<P> = aboth;
    return wfwef
}

magic<"b">([2, "jo"])