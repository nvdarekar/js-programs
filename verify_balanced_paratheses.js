/**
* Verifies whether parentheses within text are correctly
* nested Paratheses considered:(),[] and <>.
* @param {String } text
* @returns 0 if correctly nested parentheses, 1 otherwise
*/
var verify = function (text) {
  var stack = [],
      bracketPairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
      },
      closingBrackets = ')]}',
      currentChar;
    for (var i = 0; i < text.length; i++) {
        currentChar = text[i]
        if (bracketPairs[currentChar]) {
            stack.push(bracketPairs[currentChar])
        } else if (closingBrackets.indexOf(currentChar) !== -1) {
            if(stack[stack.length - 1] === currentChar) {
                stack.pop();
            } else {
                return 0;
            }
        }
    }
    if (stack.length) {
        return 0;
    } else {
        return 1;
    }
}

// Usage
verify("---(++++)----"); // 1
verify(""); // 1
verify("before ( middle []) after "); // 1
verify(") ("); // 0
verify("<(   >)"); // 0
verify("(  [  <>  ()  ]  <>  )"); //1
verify("   (      [)"); // 0
