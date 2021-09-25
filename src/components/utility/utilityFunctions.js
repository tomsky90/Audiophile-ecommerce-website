//format product name

export  const formatName = (name) => {
    const newElement = name.split(' ');
    if(newElement.length > 3) {
        const firstLetter = newElement[1].slice(0,1);
        const secondLetter = newElement[1].slice(-1);
        const name = newElement[0] + ' ' + firstLetter + secondLetter + ' ' + newElement[2];
        return name
    } else {
        return newElement[0]
    }
}

//format product price 

export const formatPrice = (amount) => {
    return "$ " + amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}