import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor } from '@tinymce/tinymce-react'

import './index.less'

function EditorMCE(props) {
  const editorRef = useRef(null)
  const { editorConfig, plugins, toolbar, apiKey, value, onChange } = props

  const handleChange = (val) => {
    onChange(val)
  }

  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      onEditorChange={handleChange}
      apiKey={apiKey}
      init={{
        ...editorConfig,
        plugins,
        toolbar,
      }}
    />
  )
}

EditorMCE.propTypes = {
  editorConfig: PropTypes.object,
  plugins: PropTypes.array,
  toolbar: PropTypes.string,
  apiKey: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

EditorMCE.defaultProps = {
  editorConfig: {
    resize: false,
    menubar: false,
    branding: false,
    statusbar: false,
  },
  plugins: ['lists', 'table', 'image', 'media'],
  toolbar:
    'formatselect bold italic underline | numlist indent aligncenter | table media image removeformat',
  apiKey: 'o1wrviyh88ibp62y5e0n8g1zg1nn0zp0q523sqpynnglokl5',
}

export default EditorMCE
