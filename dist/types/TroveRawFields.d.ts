import { TroveStatus } from "./globalTypes";
export interface TroveRawFields_owner {
    __typename: "User";
    /**
     * User's Ethereum address as a hex-string
     */
    id: string;
}
export interface TroveRawFields {
    __typename: "Trove";
    owner: TroveRawFields_owner;
    status: TroveStatus;
    rawCollateral: any;
    rawDebt: any;
    rawStake: any;
    /**
     * The value of total redistributed per-stake collateral the last time rewards were applied
     */
    rawSnapshotOfTotalRedistributedCollateral: any;
    /**
     * The value of total redistributed per-stake debt the last time rewards were applied
     */
    rawSnapshotOfTotalRedistributedDebt: any;
}
//# sourceMappingURL=TroveRawFields.d.ts.map