// Code EyesOnMe Component Here
function EyesOnMe(){
    function OnFocus(){
        console.log('Good!')
    }

    function OnBlur(){
        console.log('Hey! Eyes on me!')
    }

    return (
    <button onFocus={OnFocus} onBlur={OnBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;