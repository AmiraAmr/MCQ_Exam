const questions_array = [
    {
        id: 0,
        head: 'Which of the following is used to pass data to a component from outside React applications?',
        a: 'setState',
        b: 'props',
        c: 'render with arguments',
        d: 'PropTypes',
        answer: 'props'

    },
    {
        id: 1,
        head: 'Which of the following is used to set data inside a component ?',
        a: 'setState',
        b: 'props',
        c: 'render with arguments',
        d: 'PropTypes',
        answer: 'setState'

    },
    {
        id: 2,
        head: 'What will this code return ? "console.log(typeof typeof 1);"',
        a: 'undefined',
        b: 'string',
        c: 'number',
        d: 'null',
        answer: 'string'

    },
    {
        id: 3,
        head: 'What does this code return ? "console.log(Nan === Nan);"',
        a: 'undefined',
        b: 'Error',
        c: 'true',
        d: 'false',
        answer: 'false'

    },
    {
        id: 4,
        head: 'Which function is used to serialize an object into a JSON string in Javascript?',
        a: 'stringify()',
        b: 'parse()',
        c: 'convert()',
        d: 'none of the above',
        answer: 'stringify()'

    },
    {
        id: 5,
        head: 'Which of the following is not a Javascript framework?',
        a: 'Node',
        b: 'Vue',
        c: 'Cassandra',
        d: 'React',
        answer: 'Cassandra'

    },
    {
        id: 6,
        head: 'What will this code return ? "console.log(typeof(NaN));"',
        a: 'object',
        b: 'string',
        c: 'number',
        d: 'null',
        answer: 'number'

    }

]


  //shuffling the questions order
   const questions = questions_array.sort(() => Math.random() - 0.5)

   export default questions