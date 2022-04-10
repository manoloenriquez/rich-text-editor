import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function App() {
  const [input, setInput] = useState('')

  return (
    <div className="app">
      <div className="editor">
        <ReactQuill value={input} onChange={setInput} />
      </div>

      <div>
        {input}
      </div>
    </div>
  )
}

export default App
