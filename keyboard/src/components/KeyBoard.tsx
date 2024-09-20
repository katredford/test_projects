import Keys from './Keys'
import letters from '../characters.json'

const KeyBoard: React.FC = () => {

    const handleKeyClick = (char: string) => {
        console.log(char);
    }


    return (
        <>
            <div className="keybox">
                <div className='lettersBox'>

                    {letters.map((letter) => (
                        <Keys key={letter.id} char={letter.letter} onClick={handleKeyCLick} />
                    ))}
                </div>
                <div className="spKeyBox">

                    <button
                        className="spKeys"
                        onClick={() => handleKeyClick("ENTER")}>
                        ENTER
                    </button>
                    <button
                        className="spKeys"
                        onClick={() => handleKeyClick("BACK")}>
                        ←
                    </button>
                </div>
                <button
                        className="spKeys"
                        onClick={() => handleKeyClick("SKIP")}>
                        SKIP
                    </button>
            </div>
        </>
    )
}

export default KeyBoard;