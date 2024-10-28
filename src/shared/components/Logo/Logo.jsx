function Logo(props) {
    return (
        <div style={{
            fontWeight: props.weight || 800,
            color: props.color,
            whiteSpace: 'pre-line'
        }}>
            {props.text}
        </div>
    );
}

export default Logo;
