import type { MatchPairTypes } from "@/modules/MatchPair/types";

export type DrawCellType = {
    roundIdx: number;
    cellIdx: number;
    match: Pick<MatchPairTypes, "pair" | "fightNumber" | "toNextRound">;
}
