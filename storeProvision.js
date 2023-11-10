function storeProvision(stockRawInfo, productsOrderedRawInfo) {
    let stock = sortingNameToQuantity(stockRawInfo);
    let products = sortingNameToQuantity(productsOrderedRawInfo);

    products.forEach(item => {
        if (stock.find(({name}) => name === item.name)) {
            stock.forEach(stockedItem => {item.name === stockedItem.name ? stockedItem.quantity += item.quantity : stockedItem.quantity});
        }else{
            stock.push(item);
        }
    });

    stock.forEach(item => {
        console.log(`${item.name} -> ${item.quantity}`);
    });
    
    function sortingNameToQuantity(array) {
        let returnedArray = [];

        for (let i = 0; i < array.length-1; i+=2) {
            item = {name: '',quantity: 0};
            item.name = array[i];
            item.quantity = Number(array[i+1]);
            returnedArray.push(item);
        }
        return returnedArray
    }
}


storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])