const crypto = require("crypto")

// Generating RSA key pairs(public and private key)
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The length of our RSA keys is 3072 bits
    modulusLength: 3072,
})

//print RSA public key and private key
console.log(
    publicKey.export({
        type: "pkcs1",
        format: "pem",
    }),

    privateKey.export({
        type: "pkcs1",
        format: "pem",
    })
)

// This is our secret data
const payload = {'email':'abc@xyz.com','password': '12345678'};
const secretData = JSON.stringify(payload);

const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha512",
    },
    // Converting string to a buffer 
    Buffer.from(secretData, 'utf-8')

)

//print encrypted data it in base64 format
console.log("encypted data: ", encryptedData.toString("base64"))

const decryptedData = crypto.privateDecrypt(
    {
        key: privateKey,
        // decrypt the data
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha512",
    },
    encryptedData
)

// Converting buffer type to a string(original string) 
console.log("decrypted data: ", decryptedData.toString())