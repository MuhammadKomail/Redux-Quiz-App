  const INITIAL_STATE = [
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', ' Colorful Style Sheets', ' Computer Style Sheets', ' Creative Style Sheets'],
      answer: 'Cascading Style Sheets'
    },
    {
      question: 'What does HTML stand for?',
      options: ['HTML', ' HTMLS', ' HTMLR', ' HTMLC'],
      answer: 'HTML'
    },
    {
      question: 'What does JS stand for?',
      options: ['JS', ' JST', ' JSX', ' JSF'],
      answer: 'JS'
    },
    {
      question: 'What does REACT stand for?',
      options: ['REACT', ' POUG', ' PYEWA', ' DCTW'],
      answer: 'REACT'
    },
    {
      question: 'What does kite stand for?',
      options: ['kote', ' POUG', ' PYEWA', ' DCTW'],
      answer: 'kote'
    }
  ]

  const reducer = (state = INITIAL_STATE) => state;

  export default reducer;
