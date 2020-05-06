
export const removeElementFromArray = (element,array) => {
    const index = array.indexOf(element);
    array.splice(index,1)
    return array;
}