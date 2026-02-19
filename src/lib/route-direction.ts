
export function getRouteDirection(pathname: string) {
    if (typeof window === "undefined") return "forward";

    const stackKey = "__route_stack__";
    const stack: string[] = JSON.parse(
        sessionStorage.getItem(stackKey) || "[]"
    );

    const lastPath = stack[stack.length - 1];

    if (!lastPath) {
        sessionStorage.setItem(stackKey, JSON.stringify([pathname]));
        return "forward";
    }

    // Going back
    if (stack.length > 1 && stack[stack.length - 2] === pathname) {
        stack.pop();
        sessionStorage.setItem(stackKey, JSON.stringify(stack));
        return "back";
    }

    // Going forward
    stack.push(pathname);
    sessionStorage.setItem(stackKey, JSON.stringify(stack));
    return "forward";
}
