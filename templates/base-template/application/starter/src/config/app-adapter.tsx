import type {UIAdapterData} from "mfront-ui";
import {MAdapter, type UINode} from "mfront";

export default class AppAdapter extends MAdapter {
    setCentralUI(): UINode {
        return (
            <></>
        );
    }

    setSuspense(): UINode {
        return (<div>Loading page...</div>)
    }

    setUIAdapter(): UIAdapterData {
        return null;
    }

}