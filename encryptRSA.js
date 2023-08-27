const encryptContent = require("./encryptContent");
const EncryptRsa = require('encrypt-rsa').default;
(
    async () => {

        const encryptRsa = new EncryptRsa();
        const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();

        console.log(publicKey);
        console.log(privateKey);

        const payload = {'email':'abc@xyz.com','password': '12345678'}

        const secretMessage = Buffer.from(JSON.stringify(payload));

        const encryptedText = await encryptContent.encryptPublicKey(secretMessage, publicKey);

        console.log(encryptedText);

        const decryptedText = await encryptContent.decryptPublicKey(encryptedText, privateKey)

        console.log(decryptedText);
    }
)();