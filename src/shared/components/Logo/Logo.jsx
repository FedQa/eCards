
function Logo(props) {
    return (
        <div style={{fontSize: props.size, fontWeight: props.weight || 800}}>
            {props.text}
        </div>
    )
}

export default Logo;