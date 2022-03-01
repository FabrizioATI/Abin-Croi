const bcrypt = require('bcrypt');

async function verifyPassword(){
  const myPassword = 'admi123';
  const hash = '$2b$10$Ug2iSPT7YwZZ1x69IdHyfO.EDQN/m/FKVye.ZXPU1bYxrW3e6GVTO';
  const isMatch= await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
