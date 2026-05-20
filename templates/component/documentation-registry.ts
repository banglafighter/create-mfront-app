import {ENGLISH} from "./locales/en";
import {BANGLA} from "./locales/bn";
import {loadTranslation, MRoute} from "mfront";
import CommonUr from "./features/common/common-ur";
import ComponentsUr from "./features/components/components-ur";

export class DocumentationRegistry {

    private static loadTranslation() {
        loadTranslation("en", ENGLISH)
        loadTranslation("bn", BANGLA)
    }

    public static register(route: MRoute): void {
        CommonUr.registerRoute(route)
        ComponentsUr.registerRoute(route)
    }

}