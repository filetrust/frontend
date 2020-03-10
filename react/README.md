# Glasswall | React Style Guide

This is one of the style guides that falls under our 'frontend' branch of documentation. See the base of the repository here: https://github.com/filetrust/frontend.

## Contents
1. [Class Components vs Stateless.](#class-components-vs-stateless)

## Class Components VS Stateless
Class components are considered old news; they contain more code, which means longer transpile times, and are more dificult to understand. Use function components instead! https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108

Arrow functions are preferred over normal functions.
```
// bad
class testDefinition extends React.Component {
    constructor(props) {
        super(props);
    }

    render {
        return (
            <div>{this.props.testName}</div>
        );
    }
}

// good
const testDefinition = ({testName}) => {
    return (
        <div>{testName}</div>
    )
}
```

If internal state 

