This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hooks included

Basic Hooks

    useState
    useEffect
    useContext

Additional Hooks

    useReducer
    useCallback
    useMemo
    useRef
    useImperativeHandle
    useLayoutEffect
    useDebugValue

### useEffect vs useCallback vs useMemo

useEffect: will re-render when prop has changed
useMemo: will re-render when prop has changed and will return a function
useCallback: will re-render will prop has changed and will return a value
(explanation will be at src/components/useCallback and useMemo)

### Available Scripts

In the project directory, you can run:

### `yarn install`

Install the packages

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### useful article
https://kentcdodds.com/blog/usememo-and-usecallback