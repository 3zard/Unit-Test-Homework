function isValidValue(input) {
    if (Number.isNaN(input)) {
        return false
    } 
    if (typeof input === 'number') {
        return true
    } 
    if (Array.isArray(input)) {
        return true
    } 
    return false
}
function convertDecaToHexa(input) {
    if (typeof input === 'string') {
        input = Number(input)
    }
    if (!isValidValue(input)) return 'Wrong Input'
    const decaToHexa = {
        0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
        10: 'A', 11: 'B', 12: 'C', 13:'D', 14: 'E', 15: 'F'
    }

    if (typeof input === 'number') {
        let result = ""
        if (input < 16) {
            return String(decaToHexa[input])
        }
        else {
            while (input >= 16) {
                let temporary = input % 16
                result = String(decaToHexa[temporary]) + result
                input = (input - temporary) / 16
            }
            result = String(decaToHexa[input]) + result
        }  
        return result
    }

    if (Array.isArray(input)) {
        let result = []
        for (let i = 0; i < input.length; i++) {
            if (typeof input[i] === 'string') {
                input[i] = Number(input[i])
            }
            if (!isValidValue(input[i])) {
                return 'Wrong Input'
            } 
            let elementOfResult = ""
            if (input[i] < 16) {
                elementOfResult = String(decaToHexa[input[i]])
            }
            else {
                while (input[i] >= 16) {
                    let temporary = input[i] % 16
                    elementOfResult = String(decaToHexa[temporary]) + elementOfResult
                    input[i] = (input[i] - temporary) / 16
                }
                elementOfResult = String(decaToHexa[input[i]]) + elementOfResult
            }
            result[i] = elementOfResult
        }
        return result
    }
    return 'Wrong Input'
}
function testConvertDecaToHexa() {
    const testCases = [
        [0, '0'],
        [11, 'B'],
        [17, '11'],
        [28, '1C'],
        [3217, 'C91'],
        [[0, 11, 17, 28, 3217], ['0', 'B', '11', '1C', 'C91']],
        [undefined, 'Wrong Input'],
        [null, 'Wrong Input'],
        [NaN, 'Wrong Input'], 
        [[undefined, null, NaN], 'Wrong Input'],
        [[0, null], 'Wrong Input'],
        [[undefined, 11], 'Wrong Input']
    ]
    for (testCase of testCases) {
        let result = convertDecaToHexa(testCase[0])
        if (Array.isArray(testCase[1])) {
            for (let i = 0; i < testCase[1].length; i++) {
                if (result[i] === testCase[1][i]) {
                    console.log('Right ', result[i]) 
                }
                else {
                    console.log('False ', result[i]) 
                }
            }
        }
        else {
            if (result === testCase[1]) {
                console.log('Right ', result) 
            }
            else {
                console.log('False ', result) 
            }
        }

    }
    return 'Completed'
}