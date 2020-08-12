import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const Input = ({ name,placeholder, onChange}) => {

    return(
        <InputGroup key={name} className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1" >{name}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby="basic-addon1"
          onChange={onChange}
        />
        </InputGroup>
    )
}

export default Input