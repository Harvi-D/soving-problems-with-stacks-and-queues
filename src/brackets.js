const Stack = require("./lib/stack");

const match = (expression) => {
    const newStack = new Stack();

    for (let index = 0, limit = expression.length; index < limit; index++) {
        switch (expression[index]) {
            case '(':
            case '[':
            case '{':
                newStack.push(expression[index]);
                break;
            case ')':
                if (newStack.top ?.value === '(') {
                    newStack.pop();
                } else return false;
                break;
            case ']':
                if (newStack.top ?.value === '[') {
                    newStack.pop();
                } else return false
                break;
            case '}':
                if (newStack.top ?.value === '{') {
                    newStack.pop();
                } else return false;
        }
    }
   return !newStack.top;
};



module.exports = match;

// const Stack = require("./lib/stack");

// const match = (expression) => {
//     const newStack = new Stack();
//     expression = expression.replace(/\s/g, '');

//     expression.split('').forEach(character => { 
//         if ('([{'.includes(character)) {
//             newStack.push(character);
//         } else {
//             if (')]}'.includes(character)) {
//                 if (newStack.top) {
//                     (newStack.top ?.value === '(' && character === ')') ?
//                         newStack.pop() : null;
//                     (newStack.top ?.value === '[' && character === ']') ?
//                         newStack.pop() : null;
//                     (newStack.top ?.value === '{' && character === '}') ?
//                         newStack.pop() : null;
//                 }
//             } else {
//                 return false;
//             }
//         }
//     });
//    return !newStack.top;
// };

// module.exports = match;
