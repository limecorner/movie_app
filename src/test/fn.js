const fns = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  isNaN: () => NaN,
  checkValue: (val) => val,
  createUser: () => {
    return {
      name: "小明",
    };
  },
};

module.exports = fns;
