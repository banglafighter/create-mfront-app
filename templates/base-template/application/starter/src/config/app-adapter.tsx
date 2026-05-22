import {Loader, ToastBox, type UIAdapterData} from "mfront-ui";
import {MAdapter, type UINode} from "mfront";
import {DefaultUIImplementation} from "mfront-default-ui";
import {LoaderPinwheel} from "lucide-react";

export default class AppAdapter extends MAdapter {
    setCentralUI(): UINode {
        return (
            <>
                <ToastBox/>
            </>
        )
    }

    setSuspense(): UINode {
        return (
            <div className="flex min-h-screen w-full items-center justify-center">
                <Loader size="xl" speed={3} icon={LoaderPinwheel}/>
            </div>
        )
    }

    setUIAdapter(): UIAdapterData {
        return DefaultUIImplementation;
    }

}