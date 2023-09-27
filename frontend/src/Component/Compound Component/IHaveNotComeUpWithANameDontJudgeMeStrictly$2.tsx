import { useRef } from 'react';

import { Card } from "../Layout/Card";
import { UIDisclosure } from "../Compound Control/UIDisclosure";

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$2: React.FC = () => {
    const inputRef: React.MutableRefObject<HTMLInputElement|null> = useRef(null);

    return (
        <Card>
            <UIDisclosure
                onOpenChange={handleOpenChange}
                children={
                    <>
                        <input ref={inputRef} className='w-full bg-slate-200'
                            type='text'
                            //onChange={(event) => setStdin(event.target.value)}
                        />
                    </>
                }
            />
        </Card>
    );

    function handleOpenChange(open: boolean) {
        if (open) {
            inputRef.current?.focus();
        }
        else {
            inputRef.current?.blur();
        }
    }
}
