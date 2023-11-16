const Styling = () => {
    const pstyle = {
        background:"Lightblue",
        color:"darkblue",
        fontSize:"16px",
        padding:"10px",
        border:"1px Solid blue",
        borderRadius:"5px",

    };
    return(
        <div>
       <h1 style ={{color:"green"}}>Inline style in JSX Example</h1>
        <p style={pstyle}>This is a paragraph with iline styles applied</p>
        </div>
    );
    
};
export default Styling;