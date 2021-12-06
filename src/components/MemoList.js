import React from 'react';

const MemoList = ({ memoList, removeMemo }) => {
    return (
        <>
            {memoList.map((memo) => {
                const { id, name, date } = memo;
                let newDate = new Date(date);
                const month = newDate.toLocaleString('default', { month: 'long' });
                const day = newDate.getDate();
                const year = newDate.getFullYear();
                return (
                    <article key={id} className="memo">
                        <div className="headers">
                            <h4>{name}</h4>
                            <p>{`${month} ${day} ${year}`}</p>
                            <p>{newDate.toLocaleTimeString()}</p>
                        </div>
                        <div>
                            <button
                                className="btn-remove"
                                onClick={() => removeMemo(id)}>
                                Remove</button>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default MemoList;