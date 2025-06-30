import { useState } from 'react'
import UseRef from './13UseRef'
// import MountedUnmounted from './4MountedUnmounted'
// import UseEffectDOM from './8UseEffectDOM'
// import UseEffectDependencies from './7UseEffectDependencies'
// import UseEffectTimerFunction from './9UseEffectTimerFunction'
// import UseEffectPreviewAvartar from './10UseEffectPreviewAvartar'
// import UseEffectChat from './11UseEffectChat'
// import UseLayoutEffect from './12UseLayoutEffect'


function MountedUnmountedShow() {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(!show)}>
                Toggle
            </button>
            {show && <UseRef />}
            {/* {show && <UseLayoutEffect />} */}
            {/* {show && <UseEffectChat />} */}
            {/* {show && <MountedUnmounted />} */}
            {/* {show && <UseEffectPreviewAvartar />} */}
            {/* {show && <UseEffectTimerFunction />} */}
            {/* {show && <UseEffectDOM />} */}
            {/* {show && <UseEffectDependencies />} */}

        </>
    )
}

export default MountedUnmountedShow
