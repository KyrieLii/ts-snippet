type Config =
  | {
      check: true;
      options: Record<string, number>;
    }
  | {
      check: false;
      options: Record<string, string>;
    };

interface Some {
  config: boolean | Config;
}

const a: Some = {
  config: {
    check: false,
    options: { aaa: "123" },
  },
};

const b: Some = {
  config: {
    check: true,
    options: {
      aaa: 123,
    },
  },
};

const c: Some = {
  config: true,
};
