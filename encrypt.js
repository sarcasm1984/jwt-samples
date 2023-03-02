const encryptContent = require("./encryptContent");

(
    async () => {
        const payload = {"Email":"abc@xyz.com","Password":"1234567890"};

        // 256 bits => 64 characters hex
        const secret = Buffer.from("62197fc8886bd3b739dd2cc8aa109d0be93acdea64c07b8908168b80daf1dc47", "hex");

        const encryptedText = await encryptContent.encryptText(payload, secret);

        console.log(encryptedText);

        const decryptedText = await encryptContent.decryptJwt(encryptedText, secret);

        console.log(decryptedText);
    }
)();