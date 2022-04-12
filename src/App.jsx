import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function App() {
  const [input, setInput] = useState('')

  const parsedInput = () => {
    let val = input
    let pattern1 = /(style="|class=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gi
    let pattern2 = /"/g

    return val.replace(pattern1, '').replace(pattern2, '\\$&')
  }

  return (
    <div className="app">
      <div className="editor">
        <ReactQuill value={input} onChange={setInput} />
      </div>

      <div style={{ padding: '1rem' }}>
        <h3>
          Raw String
        </h3>
        {input}
        <br /><br />
        <h3 style={{ marginBottom: 0 }}>
          Parsed String
        </h3>
        <p>
          *Removed attributes and escaped double quotes
        </p>
        {parsedInput()}
      </div>
    </div>
  )
}

export default App
