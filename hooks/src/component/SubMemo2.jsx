import { memo } from "react";

function SubMemo2({ count }) {
    console.log('re-render');

    return (
        <div>SubMemo2 {count}</div>
    )
}

export default memo(SubMemo2)
