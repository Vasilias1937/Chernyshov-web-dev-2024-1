Array.prototype.snail = function(rowsCount, colsCount) {  

    const totalElements = rowsCount * colsCount;  

    if (this.length !== totalElements) {  
        return [];  
    }  

    const array = Array.from({ length: rowsCount }, () => new Array(colsCount));  
  
    let k = 0;  

    for (let i = 0; i < colsCount; i++) {  
        if (i % 2 === 0) {  
            for (let j = 0; j < rowsCount; j++) {  
                array[j][i] = this[k++];  
            }  
        } else {  
            for (let j = rowsCount - 1; j >= 0; j--) {  
                array[j][i] = this[k++];  
            }  
        }  
    }  

    return array;  
};  

const arr = [1,2,3,4];  

console.log(arr.snail(1, 4));   