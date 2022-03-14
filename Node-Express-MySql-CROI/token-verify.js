const jwt = require('jsonwebtoken');

const secret = 'mycat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjb3N0dW1lciIsImlhdCI6MTY0NTc2NTk0OH0.t9i01k9vgivn-2VXmTnqeCJwtXtHCJMtNbwpd_jP7h8'


function verifyToken(token, secret) {
  return jwt.verify( token, secret);
}

const payload = verifyToken(token, secret)
console.log(payload);
