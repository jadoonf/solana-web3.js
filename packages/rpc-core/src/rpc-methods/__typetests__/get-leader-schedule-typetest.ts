import { Address } from '@solana/addresses';
import { Commitment, Rpc, Slot } from '@solana/rpc-types';

import { GetLeaderScheduleApi } from '../getLeaderSchedule';

const rpc = null as unknown as Rpc<GetLeaderScheduleApi>;
const slot = 0n as Slot;
const identity = 'Joe11111111111111111111111111111' as Address<'Joe11111111111111111111111111111'>;

// Parameters
const params = null as unknown as Parameters<GetLeaderScheduleApi['getLeaderSchedule']>[1];
params satisfies { commitment?: Commitment } | undefined;
params satisfies { identity?: Address } | undefined;

async () => {
    {
        const result = await rpc.getLeaderSchedule(slot).send();
        // Can be null if the slot corresponds to an epoch that does not exist
        result satisfies Record<Address, Slot[]> | null;
    }

    {
        const result = await rpc.getLeaderSchedule(null).send();
        // Won't be null
        result satisfies Record<Address, Slot[]>;
    }

    {
        const result = await rpc.getLeaderSchedule(slot, { identity }).send();
        // Can be null if the slot corresponds to an epoch that does not exist
        result satisfies Readonly<{ [key: Address]: Slot[] | undefined }> | null;
    }

    {
        const result = await rpc.getLeaderSchedule(null, { identity }).send();
        // Won't be null
        result satisfies Readonly<{ [key: Address]: Slot[] | undefined }>;
    }
};
