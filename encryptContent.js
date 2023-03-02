const jose = require("jose");

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
	}
}

module.exports = encryptContent;