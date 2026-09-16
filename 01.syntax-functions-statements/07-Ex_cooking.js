// Task: Cooking by Numbers.
// Description: Receive a number and five operations, 
// perform them sequentially, and print each result.

function cookingByNumbers(num, data1, data2, data3, data4, data5) {
    num = Number(num);
    let arr = [data1, data2, data3, data4, data5];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        switch (command) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = (num * 0.80).toFixed(1);
                break;
        }

        console.log(num);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');