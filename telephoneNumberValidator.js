function telephoneCheck(str) {
  const reg = /^(1 |1)?(\(\d{3}\)|\d{3}-?)[ ]?\d{3}[ -]?\d{4}$/
  console.log(reg.test(str))
  return reg.test(str);
}

telephoneCheck("(555) 555-5555");
