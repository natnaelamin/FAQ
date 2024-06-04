import React, { useState } from 'react';
 import Question from './Components/Question';
 import Answer from './Components/Answer';

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswerVisibility = (index) => {
    setActiveQuestion((prevQuestion) => (prevQuestion === index ? null : index));
  };

  const faqData = [
    {
      question: 'How many team members can I invite?',
      answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
      question: 'Do you provide additional support?',
      answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
  ];

  return (
    <div className="bg-violet-500 px-5 pt-40 md:px-56 md:py-28 bg-cover h-screen">
      <div className="flex bg-white rounded-3xl flex-col md:flex-row md:overflow-hidden">
        <div className="flex justify-center -mt-14 px-9 md:px-0 md:mt-0 md:py-10 md:-ml-20 md:w-2/4">
          <img className=" -ml-48 mt-2 pb-6  md:-ml-64 md:mr-8 h-32 md:h-auto absolute  md:pt-16 md:pb-16  md:mt-24" 
          src="/images/illustration-box-desktop.svg" alt="box" />
          <img className="-mt-20 md:mt-0  md:py-8" src="/images/illustration-woman-online-desktop.svg" alt="woman" />
        </div>
        <div className="px-5 md:pt-7 md:w-2/4 mb-8 md:ml-5 md:pl-14 mt-12 md:my-6  text-base md:text-md">
          <h1 className="text-4xl font-bold pl-28 md:pl-0 pb-8">FAQ</h1>
          {faqData.map((data, index) => (
            <div className="border-b border-gray-300 mb-5" key={index}>
              <Question
                index={index}
                activeQuestion={activeQuestion}
                ToggleAnswerVisibility={toggleAnswerVisibility}
                question={data.question}
              />
              {activeQuestion === index && <Answer answer={data.answer} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
