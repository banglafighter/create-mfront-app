import {loadPage, MRoute} from "mfront";

const API_BASE_URL = "/api/v1/something"
const UI_BASE_URL = "/components"

export default class ComponentsUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
    }

    static registerRoute(route: MRoute): void {

    }

}