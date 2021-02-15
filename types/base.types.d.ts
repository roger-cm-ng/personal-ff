// Base types to be used through the application, and with testing
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.png' {
    const content: any;
    export default content;
}
declare module '*jpg' {
    const content: any;
    export default content;
}
declare module '*.jpeg' {
    const content: any;
    export default content;
}
declare module '*.gif' {
    const content: any;
    export default content;
}