Ref Hooks: https://react.dev/reference/react/hooks#ref-hooks

Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.

