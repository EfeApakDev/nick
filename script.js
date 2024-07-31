function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const convertedText = convertToSpecialFont(inputText);
    outputText.textContent = convertedText;
}

function convertToSpecialFont(text) {
    const conversionMap = {
        'A': '𝚨', 'B': '𝚩', 'C': '𝗖', 'D': '𝗗', 'E': '𝚬',
        'F': '𝗙', 'G': '𝗚', 'H': '𝚮', 'I': '𝚰', 'J': '𝗝',
        'K': '𝚱', 'L': '𝗟', 'M': '𝚳', 'N': '𝗡', 'O': '𝚶',
        'P': '𝚸', 'Q': '𝗤', 'R': '𝐑', 'S': '𝗦', 'T': '𝚻',
        'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝚾', 'Y': '𝚼',
        'Z': '𝚭', 
        'a': '𝛂', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝛆',
        'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝛊', 'j': '𝗷',
        'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝛐',
        'p': '𝗽', 'q': '𝗾', 'r': '𝗿 ', 's': '𝘀', 't': '𝛕',
        'u': '𝛖', 'v ': '𝛎', 'w': '𝘄', 'x': '𝛘', 'y': '𝘆',
        'z': '𝘇'
    };

    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += conversionMap[char] || char;
    }
    return result;
}

function copyText() {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Metin kopyalandı!');
    }).catch(err => {
        console.error('Kopyalama işlemi başarısız oldu:', err);
    });
}
