export default function Teammates(props) {
    const { details } = props;
    if(!details) {
        return <h3>Gotta start somewhere...</h3>
    }
    
    return (
        <div>
            <div className='member container'>
                <h3>{details.name}</h3>
                <p>Email: {details.email}<br />
                Role: {details.role}</p>
            </div>
            {/* <div>
                <button onClick={edit(details)}>Edit</button>
            </div> */}
        </div>
    )
}