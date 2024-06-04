import React from 'react'

function Question({index, question, activeQuestion, ToggleAnswerVisibility }) {

    const isActive = activeQuestion === index;
  return (
    <div>
        <div className={`flex justify-between mb-2 cursor-pointer ${isActive ? 'font-bold' : ''}`}
        onClick={() => ToggleAnswerVisibility(index)}>
            <p>{question}</p>
            <img src="/images/icon-arrow-down.svg" alt=""
            className={`${ isActive ? 'transform rotate-180' : ''} h-6 pt-4`} />
        </div>
    </div>
  )
}

export default Question
