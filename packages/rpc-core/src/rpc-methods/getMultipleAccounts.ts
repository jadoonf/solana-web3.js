import type { Address } from '@solana/addresses';
import type { Commitment, IRpcApiMethods, RpcResponse, Slot } from '@solana/rpc-types';

import {
    AccountInfoBase,
    AccountInfoWithBase58EncodedData,
    AccountInfoWithBase64EncodedData,
    AccountInfoWithBase64EncodedZStdCompressedData,
    AccountInfoWithJsonData,
    DataSlice,
} from './common';

type GetMultipleAccountsApiResponseBase = AccountInfoBase | null;

type GetMultipleAccountsApiCommonConfig = Readonly<{
    /** Defaults to `finalized` */
    commitment?: Commitment;
    /** The minimum slot that the request can be evaluated at */
    minContextSlot?: Slot;
}>;

type GetMultipleAccountsApiSliceableCommonConfig = Readonly<{
    /** Limit the returned account data */
    dataSlice?: DataSlice;
}>;

export interface GetMultipleAccountsApi extends IRpcApiMethods {
    /**
     * Returns the account information for a list of Pubkeys.
     */
    getMultipleAccounts(
        /** An array of up to 100 Pubkeys to query */
        addresses: Address[],
        config: GetMultipleAccountsApiCommonConfig &
            GetMultipleAccountsApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base64';
            }>,
    ): RpcResponse<(GetMultipleAccountsApiResponseBase & (AccountInfoWithBase64EncodedData | null))[]>;
    getMultipleAccounts(
        /** An array of up to 100 Pubkeys to query */
        addresses: Address[],
        config: GetMultipleAccountsApiCommonConfig &
            GetMultipleAccountsApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base64+zstd';
            }>,
    ): RpcResponse<(GetMultipleAccountsApiResponseBase & (AccountInfoWithBase64EncodedZStdCompressedData | null))[]>;
    getMultipleAccounts(
        /** An array of up to 100 Pubkeys to query */
        addresses: Address[],
        config: GetMultipleAccountsApiCommonConfig &
            Readonly<{
                encoding: 'jsonParsed';
            }>,
    ): RpcResponse<(GetMultipleAccountsApiResponseBase & (AccountInfoWithJsonData | null))[]>;
    getMultipleAccounts(
        /** An array of up to 100 Pubkeys to query */
        addresses: Address[],
        config: GetMultipleAccountsApiCommonConfig &
            GetMultipleAccountsApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base58';
            }>,
    ): RpcResponse<(GetMultipleAccountsApiResponseBase & (AccountInfoWithBase58EncodedData | null))[]>;
    getMultipleAccounts(
        /** An array of up to 100 Pubkeys to query */
        addresses: Address[],
        config?: GetMultipleAccountsApiCommonConfig,
    ): RpcResponse<(GetMultipleAccountsApiResponseBase & (AccountInfoWithBase64EncodedData | null))[]>;
    //
    getMultipleAccounts(
        addresses: Address[],
        config?: GetMultipleAccountsApiCommonConfig &
            GetMultipleAccountsApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
            }>,
    ): RpcResponse<
        (GetMultipleAccountsApiResponseBase &
            (
                | AccountInfoWithBase58EncodedData
                | AccountInfoWithBase64EncodedData
                | AccountInfoWithBase64EncodedZStdCompressedData
                | AccountInfoWithJsonData
                | null
            ))[]
    >;
}
