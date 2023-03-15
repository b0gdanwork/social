declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.module.css';

// declare module '*.svg' {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module '*.svg';

declare const __IS_DEV__: boolean
declare module '*.jpg';
declare module '*.png' {
  const value: any
  export default value
}
