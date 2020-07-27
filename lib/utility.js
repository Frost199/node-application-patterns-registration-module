module.exports.randomString = (stringLength) => {
  stringLength = stringLength || 12;
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < stringLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    result += chars.substring(randomNumber, randomNumber + 1);
  }
  return result;
}
