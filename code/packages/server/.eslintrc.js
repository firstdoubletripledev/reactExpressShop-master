module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
  },
};
