const signVerifySSO = require("./signVerifySSO");

(
    async () => {

        const payload = {"Email":"abc@xyz.com","Password":"1234567890"};

        // 128 bits => 32 characters hex
        const secret = Buffer.from("62197fc8886bd3b739dd2cc8aa109d0b", "hex");

        const signedJwt = await signVerifySSO.signJWT(payload, secret);

        console.log(signedJwt);

        const verifiedJwt = await signVerifySSO.verifyJwt(signedJwt, secret);

        console.log(verifiedJwt);
    }
)();