function wordsTracker(words) {
    let trackedWords, OtrackedWords = [];
    trackedWords = words.shift().split(' ');
    trackedWords.forEach(tw => {
        OtrackedWords.push({tw, count: 0});
    });
    words.forEach(word => {
        let tdw = OtrackedWords.find((w) => w.tw === word);
        if(tdw){
            tdw.count += 1;
        }
    });
    OtrackedWords.sort((a, b) => a.count - b.count).reverse()
    OtrackedWords.forEach(result => {
        console.log(`${result.tw} - ${result.count}`);
    });
}

wordsTracker([

    'this sentence you the capa',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])