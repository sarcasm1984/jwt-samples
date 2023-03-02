const jose = require("jose");

let signVerifySSO = {
    signJWT: async (payload, secret) => {
        let sign = new jose.SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.sign(secret);

        return sign;
    },

	verifyJwt: async (jwt, secret) => {
		return jose.jwtVerify(jwt, secret, {
			algorithms: ["HS256"],
		});
	}
}

module.exports = signVerifySSO;