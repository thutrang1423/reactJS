import React from "react";

function SubMemo1() {
    console.log('re-render');

    return (
        <div>SubMemo1</div>
    )
}

export default React.memo(SubMemo1)
