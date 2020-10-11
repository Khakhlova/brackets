module.exports = function check(str, bracketsConfig) {

    let newstr = str.split('');
    let stack = [];
    let bracket = new Map(bracketsConfig);

    for (let i = 0; i < newstr.length; i++) {
        let br = newstr[i];
        if (br === bracket.get(stack[stack.length - 1])) {
            if (stack.length == 0) {
                return false;
            } else {
                stack.pop();
            };
        } else if (bracket.has(br)) {
            stack.push(br);
        } else {
            return false;
        };
    };

    return stack.length === 0;;
};
