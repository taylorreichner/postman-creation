import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
    url,
    onChange,
    onSubmit
}) => (
    <> 
        <header>This lab is difficult. i swear im trying but i did look at your code...</header>
        <form onSubmit={onSubmit}>
            <label>JSON Body</label>
            <textarea name="body" onChange={onChange}/>
            <label>URL</label>
            <input 
            id="url"
            name="url"
            onChange={onChange}
            value={url}
            placeholder="URL"

            />
        <label>GET</label>
            <input
            id="method"
            type="radio"
            name="method"
            value="GET"
            onChange={onChange}
            checked
            />
        <label>DELETE</label>
            <input 
            id="method"
            type="radio"
            name="method"
            value="DELETE"
            onChange={onChange}
            />
        <label>POST</label>
            <input 
            id="method"
            type="radio"
            name="method"
            value="POST"
            onChange={onChange}
            />
        <button type="submit">Submit</button>
        
        </form>
    </>
)

Controls.protTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Controls;