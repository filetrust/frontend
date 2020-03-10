# Glasswall React Style Guide

This is one of the style guides that falls under our 'frontend' branch of documentation. It assumes you're using this eslint file: https://github.com/filetrust/frontend/tree/master/linters/eslint.

See the base of the repository here: https://github.com/filetrust/frontend.

## Contents
1. [Class Components vs Stateless](#class-components-vs-stateless)
2. [Naming Conventions](#naming-conventions)
3. [Code Indentation](#code-indentation)
4. [Quotes](#quotes)
5. [Props](#props)

## Class Components VS Stateless
Class components are considered old news; they contain more code, which means longer transpile times, and are more dificult to understand. Use function components instead! https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108.

eslint: ``` "func-style": ["error", "expression", { "allowArrowFunctions": true }], ```


Arrow functions are preferred over normal functions.
```
// bad
class TestDefinition extends React.Component {
    constructor(props) {
        super(props);
    }

    render {
        return (
            <div>{this.props.testName}</div>
        );
    }
}

// bad
function TestDefinition({testName}) {
    return (
        <div>{testName}</div>
    )
}

// good
const TestDefinition = ({testName}) => {
    return (
        <div>{testName}</div>
    )
}
```

## Naming Conventions
### Extensions
Use the .jsx extension for all react components.

### Files
Filenames should be PascalCase.

### Instances
Instances/references to components should be camelCase, import should be PascalCase.

```
import TestDefinition from './TestDefinition';

const testDefinition = <TestDefinition />;
```

### Components
The component name should be the same as the filename.

### Higher Order Components
Use camelCase for the Higher order component, and PascalCase for the return. Try to relate the name of the Higher Order Component to the component passed in. e.g
```
const withContainer = (WrappedComponent) => {
    const WithContainer = (props) => {
        return <WrappedComponent {...props} container>;
    }

    WithContainer.displayName = `${WrappedComponent.name}Container`;

    return WithContainer;
}
```

## Code Indentation
Always use 4 spaces for indentation (do not use tabs). You can usually set your IDE up to treat tabs as spaces.

In terms of alignment, props should each have their own line, unless you can keep everything to one line. Keep the closing angled bracket to the end of the props.
eslint: ```react/jsx-closing-bracket-location: ["error", "after-props"]```
```
// bad
<TestDefinition testName={"Test 1"}
    engineVersion={"Rebuild 1.0"}/>

// bad
<TestDefinition
    testName={"Test 1"}
    engineVersion={"Rebuild 1.0"}
/>

// good
<TestDefinition testName={"Test 1"} />

// good 
<TestDefinition
    testName={"Test 1"}
    engineVersion={"Rebuild 2.0"} />
```

Closing Tags should mirror HTML. eslint: ```react/jsx-closing-tag-location```

## Quotes
Use double quotes for JSX attributes (to mirror HTML), but single quotes for any other JavaScript.

## Props
Use camelCase for prop names.

Don't use DOM component prop names for your own prop names.
```
// bad
<Component className="box" />

// good
<Component shape="box">
```

Avoid using an array index as a key (anti-pattern).
```
// bad
{
    tests.map((test, index) => {
        return <Test {...test} key={index} />;
    })
}

// good
{
    tests.map(test => {
        return <Test {...test} key={test.id}>;
    })
}
```

## Refs
Use ref callbacks, not string refs.
```
// bad
<Component ref="myRef" />

// good
<Component ref={(ref) => { myRef = ref; }}>
```

[Back to Top](#glasswall-react-style-guide)