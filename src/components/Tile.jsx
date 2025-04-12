function Tile({ row, col, content, onClick }) {
    return (
        <button className="cell" onClick={() => onClick(row, col)}>
            {content}
        </button>
    )
}

export default Tile