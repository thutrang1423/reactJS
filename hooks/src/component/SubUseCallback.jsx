import { memo } from "react";

function SubUseCallback({ onIncrease, bien }) {
    console.log('re-render');

    return (
        <>
            SubUseCallback
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(SubUseCallback)
