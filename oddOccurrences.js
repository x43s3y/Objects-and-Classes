function oddOccurrences(input) {
    let words = input.split(' ');
    let word;
    while (true) {
        word = words.shift();
        words.push({word});
        if (words.length) {
            break;
        }
    }
    words.forEach(word => {
        
    });
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');