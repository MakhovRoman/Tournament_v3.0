import type { MatchPairTypes } from "@/modules/MatchPair/types";

const getCategoryLength = (cat:MatchPairTypes[]) => {
    return cat.reduce((res, item) => res += item.pair.length, 0);
}

export const getDrawGrid = (cat:MatchPairTypes[]) => {
    const length = getCategoryLength(cat);

    return {
        columns: Math.floor(Math.log2(length)) + 1,
        rows: cat.length,
    }
}
