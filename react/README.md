# Glasswall | React Style Guide

This is one of the style guides that falls under our 'frontend' branch of documentation. See the base of the repository here: https://github.com/filetrust/frontend.

## Contents
1. [Class Components vs Stateless](#class-components-vs-stateless)
2. [Naming Conventions](#naming-conventions)
3. [Code Indentation](#code-indentation)

## Class Components VS Stateless
Class components are considered old news; they contain more code, which means longer transpile times, and are more dificult to understand. Use function components instead! https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108

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
Use the .jsx extension for any react components.

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

