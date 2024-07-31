function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const convertedText = convertToSpecialFont(inputText);
    outputText.textContent = convertedText;
}

function convertToSpecialFont(text) {
    const conversionMap = {
        'A': '𝚨', 'B': '𝚩', 'C': '𝘊', 'D': '𝚫', 'E': '𝚬',
        'F': '𝚭', 'G': '𝚮', 'H': '𝚮', 'I': '𝚰', 'J': '𝚱',
        'K': '𝚱', 'L': '𝚳', 'M': '𝚳', 'N': '𝚵', 'O': '𝚶',
        'P': '𝚸', 'Q': '𝚸', 'R': '𝐑', 'S': '𝚺', 'T': '𝚻',
        'U': '𝚼', 'V': '𝚽', 'W': '𝚾', 'X': '𝚾', 'Y': '𝚼',
        'Z': '𝚭', 
        'a': '𝛂', 'b': '𝛃', 'c': '𝛄', 'd': '𝛅', 'e': '𝛆',
        'f': '𝛇', 'g': '𝛈', 'h': '𝛉', 'i': '𝛊', 'j': '𝛋',
        'k': '𝛌', 'l': '𝛍', 'm': '𝛎', 'n': '𝛏', 'o': '𝛐',
        'p': '𝛑', 'q': '𝛒', 'r': '𝛓', 's': '𝛔', 't': '𝛕',
        'u': '𝛖', 'v': '𝛗', 'w': '𝛘', 'x': '𝛙', 'y': '𝛚',
        'z': '𝛛'
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
