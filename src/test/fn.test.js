const fn = require("./fn");

test("測試 email 格式是否正確", () => {
  expect("gres@gmail.com").toMatch(
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  );
});

test("測試 email 格式是否正確 2", () => {
  expect("gres@gmail").toMatch(
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  );
});
