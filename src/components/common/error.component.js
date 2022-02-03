const Error = ({ error }) => {
    return (
        <div className="d-felx justify-content-center">
            <p style={{color: "red"}}>{error}</p>
        </div>
    );
}
 
export default Error;