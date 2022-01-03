const cutFruit = fruit => fruit*4;
function Juce(oringe , Apple){
    const oringeJuce = cutFruit(oringe);
    const appleJuce = cutFruit(Apple);
    return `Juce from ${oringeJuce} pices of oringe and ${appleJuce} pices of apple .`
}

console.log(Juce(3,4));