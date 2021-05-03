import  React from 'react'

function TileLayout(props) {
    function arrayRemove(arr, value) {
        return arr.filter(function(geeks){
            return geeks != value;
        });
    }
    const randomChoice = array => {
		const randIndex = Math.floor(Math.random() * array.length);
		return array[randIndex];
	};
    function reset(z) {
        const z_new = Array.from(z);
        for (var i = 0; i < 9; i ++) {
            if ((z[i] == 1) || (z[i] == 3)) {
                z_new[i] = 0
            }
        }
        return z_new
    }
    async function evaluate(val) {
        const currSum = props.getCurrSum;
        const rand = props.getRand;
        console.log("I needed a total", rand, "and got", val,"Current sum was", currSum, "so sum is", currSum + val)

        if (currSum + val == rand) {
            console.log("CORRECT!");
            // Resetting Current sum to 0
            props.setCurrSum(0)
            // Removing this current Random sum
            const x = arrayRemove(props.getArray, props.getRand);
            props.setArray(x);
            const z = props.getColor
            z[rand-1] = 2
            props.setColor(z);
            props.setColor(reset(props.getColor));
            props.setRand(randomChoice(props.getArray));
        }
        else if ((currSum + val < rand)) {
            // Updating current sum
            props.setCurrSum(currSum + val);
            const z = props.getColor
            z[val-1] = 1
        }
        else if (( currSum + val > rand)) {
            // Updating current sum
            props.setCurrSum(currSum+val);
            const z = props.getColor
            z[val-1] = 3
            await new Promise(r => setTimeout(r, 200));
            props.setCurrSum(0);
            props.setColor(reset(z));

        }
        console.log("after click", props.getArray, "Current Required: ", props.getRand, "Current Sum: ", props.getCurrSum);
    }
    const colors = {0: 'white', 1: 'blue', 2: 'green', 3: 'red'}
    console.log("rand", props.getRand);
    return(
        <div>
            <table>
                <tr>
                    <td style = {{backgroundColor: colors[props.getColor[0]]}} onClick = {() => evaluate(1)}>1</td>
                    <td style = {{backgroundColor: colors[props.getColor[1]]}} onClick = {() => evaluate(2)}>2</td>
                    <td style = {{backgroundColor: colors[props.getColor[2]]}} onClick = {() => evaluate(3)}>3</td>
                </tr>
                <tr>
                    <td style = {{backgroundColor: colors[props.getColor[3]]}} onClick = {() => evaluate(4)}>4 </td>
                    <td style = {{backgroundColor: colors[props.getColor[4]]}} onClick = {() => evaluate(5)}>5 </td>
                    <td style = {{backgroundColor: colors[props.getColor[5]]}} onClick = {() => evaluate(6)}>6 </td>
                </tr>
                <tr>
                    <td style = {{backgroundColor: colors[props.getColor[6]]}} onClick = {() => evaluate(7)}>7 </td>
                    <td style = {{backgroundColor: colors[props.getColor[7]]}} onClick = {() => evaluate(8)}>8 </td>
                    <td style = {{backgroundColor: colors[props.getColor[8]]}} onClick = {() => evaluate(9)}>9 </td>
                </tr>
            </table>
        </div>
    ) 
}

export default TileLayout