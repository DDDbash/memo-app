import React, { useEffect } from 'react';

const OverlayForm = ({ toggleForm, showForm, onSubmit, memoRef }) => {
    const show = showForm ? "show" : "";

    useEffect(() => {
        memoRef.current.focus();
    })
    return (<>
        <form onSubmit={onSubmit} className={`overlay-form ${show}`}>
            <div className="close-btn" onClick={toggleForm}>&times;</div>
            <h1>Create a new memo</h1>
            <div className="form-element">
                <label htmlFor="memo">Memo Name</label>
                <input type="text" name="memoName" ref={memoRef} />
                <p>Memo cannot be empty</p>
            </div>
            <div className="form-element">
                <button type="submit">Create</button>
            </div>
        </form>
    </>)
}

export default OverlayForm;
