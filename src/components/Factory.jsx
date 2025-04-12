import { useState } from "react"
import "./Factory.css"

function Factory() {

    const factoryWidth = 8
    const factoryHeight = 8

    let [selectedTile, setselectedTile] = useState("")

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

    let machineTypes = [
    {
        icon:"➡",price:10,action: "",
    },
    {
        icon:"⬅",price:10,action: "",
    },
    {
        icon:"⬆",price:10,action: "",
    },
    {
        icon:"⬇",price:10,action: "",
    },
    ]

    function testClick() {
        console.log("I Have Been Clicked!");
        
    }

    function selectComp(buttonKey) {
        console.log(buttonKey);
        
        setselectedTile(buttonKey) 
    }

    function buildElement(targetRIndex, targetCIndex) {
        console.log(targetRIndex, targetCIndex, selectedTile);
    
        // Deep copy the matrix before modifying
        const updatedMatrix = factoryMatrix.map(row => [...row])
        updatedMatrix[targetRIndex][targetCIndex] = selectedTile
    
        setFactoryMatrix(updatedMatrix)
    }

    console.log(factoryMatrix);
    

    return(
        <>
            <h1>Untitled Factory Game</h1>
            <div className="selected-tile">
                <h2>{selectedTile}</h2>
            </div>
            <div className="build-field">
            {factoryMatrix.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((col, colIndex) => (
                            <button key={colIndex} className="cell" onClick={() => buildElement(rowIndex,colIndex)}>
                                {col}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="build-elements">
                {machineTypes.map((upgrade, idx) => (
                    <button key={idx} onClick={(event) => selectComp(event.target.textContent)}>{upgrade.icon}</button>
                ))}
            </div>
        </>
    )
}

export default Factory