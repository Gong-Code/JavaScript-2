export const Hero = () => {

    function MyButton(){
        return(
            <button onClick={() => console.log('clicked')}>Click Me</button>
        )    
    }

    return (
        <div className="btn">{<MyButton />}</div>
    )
}
