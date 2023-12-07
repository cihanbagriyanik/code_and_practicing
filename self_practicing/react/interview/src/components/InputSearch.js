import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const SearchUser = ({setUser}) => {
    return (
        <div className="row">
            <div className="col-md-4 mx-auto">
                <InputGroup className="mb-3 w-100">
                    <Form.Control
                        placeholder="Github's username"
                        aria-label="Github's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}
export default SearchUser
