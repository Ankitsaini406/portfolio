let index = 0;

export function getRouteDirection(path: string) {
    if (typeof window === "undefined") return "forward";

    const key = "__route_index__";
    const state = history.state ?? {};

    if (!state[key]) {
        history.replaceState({ ...state, [key]: ++index }, "");
        return "forward";
    }

    const direction = state[key] < index ? "back" : "forward";
    index = state[key];
    return direction;
}
