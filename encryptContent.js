const jose = require("jose");
const EncryptRsa = require('encrypt-rsa').default;

let encryptContent = {
    encryptText : async (payload, secret) => {
        return new jose.EncryptJWT(payload)
		.setProtectedHeader({ alg: "dir", enc: "A256GCM" })
		.encrypt(secret);
    },

	decryptJwt : async (jwt, secret) => {
		const options = {
			contentEncryptionAlgorithms: ["A256GCM"],
			keyManagementAlgorithms: ["dir"],
		};
		return jose.jwtDecrypt(jwt, secret, options);
	},

	encryptPublicKey : async(secretMessage, publicKey) => {
		const encryptRsa = new EncryptRsa();

		const encryptedData = encryptRsa.encryptStringWithRsaPublicKey({ 
			text: secretMessage,   
			publicKey,
		  });
		
		return encryptedData.toString('hex');
	},

	decryptPublicKey : async(encryptedData, privateKey) => {
		const encryptRsa = new EncryptRsa();
		
		const decryptedData = encryptRsa.decryptStringWithRsaPrivateKey({ 
			text: encryptedData, 
			privateKey
		  });

		return decryptedData.toString('utf-8');
	}
}

module.exports = encryptContent;