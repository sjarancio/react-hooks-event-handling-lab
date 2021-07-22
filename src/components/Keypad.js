// Code Keypad Component Here
function Keypad(){
    function OnChange(event){
        console.log('Entering password...')
    }

    return(
        <input type="password" onChange={OnChange}/>
    )
}

export default Keypad;