const bs58 = require('bs58')

const compressHash = hash => '0x' + bs58.decode(hash).toString('hex').substr(4);
const decompressHash = compressedHash => bs58.encode(Buffer.from('1220' + compressedHash.substr(2).toString('hex'), 'hex'));

module.exports = {
  compressHash,
  decompressHash
};
