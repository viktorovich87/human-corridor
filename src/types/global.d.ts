declare module '*.component.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.component.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.component.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.svg' {
  const content: any;
  const ReactComponent: any;
  export { ReactComponent };
  export default content;
}