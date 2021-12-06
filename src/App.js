import React, { useState, useRef } from 'react';
import MemoList from './components/MemoList';
import { data } from './data';
import OverlayForm from './components/OverlayForm';

function App() {
  const [memoList, setMemoList] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const memoRef = useRef(null);

  const toggleForm = () => setShowForm(!showForm);

  const onSubmit = (e) => {
    e.preventDefault();
    const memo = memoRef.current.value.trim();
    if (memo) {
      setMemoList([...memoList, { name: memo, date: new Date(), id: new Date().getTime().toString() }])
      memoRef.current.value = "";
      toggleForm();
    }
  }

  const removeMemo = (memoToDelete) => {
    const newMemoList = memoList.filter((memo) => memo.id !== memoToDelete);
    setMemoList(newMemoList);
  }

  return (
    <main>
      <section className="container">
        <div className="top">
          <h3>{memoList.length} Memos</h3>
          <OverlayForm
            onSubmit={onSubmit}
            showForm={showForm}
            toggleForm={toggleForm}
            memoRef={memoRef}
          />
          <button
            onClick={toggleForm}
            className="btn-remove"
          >
            Add</button>
        </div>
        <MemoList
          removeMemo={removeMemo}
          memoList={memoList}
        />
        <button
          className="btn-primary"
          onClick={() => setMemoList([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
