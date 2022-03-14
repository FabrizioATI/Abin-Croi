const jwt = require('jsonwebtoken');

const secret = 'mycat';

const payload = {
  sub: 1,
  role: 'costumer'
}

function singToken(payload, secret) {
  return jwt.sign( payload, secret);
}

const token = singToken(payload, secret)
console.log(token);
