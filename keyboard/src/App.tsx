import Keys from './components/Keys'
import letters from './characters.json'

function App() {

  const handleKeyCLick = (char: string) => {
    console.log(char);
  }


  return (
    <>
   {letters.map((letter) => (
    <Keys key={letter.id} char={letter.letter} onClick={handleKeyCLick} />
   ))}
    </>
  )
}

export default App
