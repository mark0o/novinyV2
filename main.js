function textToNumber(text) {
    const asciiStr = encodeURIComponent(text);
    const chars = asciiStr.split("");

    const hexChars = chars.map((ch) =>
        ch.codePointAt(0).toString(16).padStart(2, "0")
    );

    const hexNumber = hexChars.join("");
    const m = BigInt(`0x${hexNumber}`);

    return m;
}

function numberToText(m) {
    let hexNumber = m.toString(16);

    if (hexNumber.length % 2 === 1) {
        hexNumber = "0" + hexNumber;
    }

    const hexChars = hexNumber.match(/\w{2}/g);

    const chars = hexChars.map((hex) =>
        String.fromCodePoint(parseInt(hex, 16))
    );

    const asciiStr = chars.join("");
    const text = decodeURIComponent(asciiStr);

    return text;
}

function encrypt(key, string) {
    return btoa(string)
}

function decrypt(key, string) {
    return atob(string)
}

const encrypted = encrypt(123456, "Ahoj")
console.log(encrypted)

console.log(decrypt(123456, encrypted))