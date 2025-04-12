import { useState } from "react"
import Tile from "./Tile" // make sure the path is correct
import "./Factory.css"

function Factory() {
    const factoryWidth = 8
    const factoryHeight = 8

    const [selectedTile, setSelectedTile] = useState("")

    const [factoryMatrix, setFactoryMatrix] = useState(() => {
        const initialMatrix = []
        for (let i = 0; i < factoryHeight; i++) {
            let newRow = []
            for (let j = 0; j < factoryWidth; j++) {
                newRow.push("")
            }
            initialMatrix.push(newRow)
        }
        return initialMatrix
    })

    const machineTypes = [
        { icon: "➡", price: 10, action: "" },
        { icon: "⬅", price: 10, action: "" },
        { icon: "⬆", price: 10, action: "" },
        { icon: "⬇", price: 10, action: "" },
    ]

    function selectComp(buttonKey) {
        setSelectedTile(buttonKey)
    }

    function buildElement(row, col) {
        const updatedMatrix = factoryMatrix.map(r => [...r])
        updatedMatrix[row][col] = selectedTile
        setFactoryMatrix(updatedMatrix)
    }

    return (
        <>
            <h1>Untitled Factory Game</h1>
            <div className="selected-tile">
                <h2>{selectedTile}</h2>
            </div>
            <div className="build-field">
                {factoryMatrix.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((content, colIndex) => (
                            <Tile
                                key={colIndex}
                                row={rowIndex}
                                col={colIndex}
                                content={content}
                                onClick={buildElement}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="build-elements">
                {machineTypes.map((machine, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => selectComp(e.target.textContent)}
                    >
                        {machine.icon}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Factory