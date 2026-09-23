export const languages = [
  { id: 'python', icon: '🐍', name: 'Python', difficulty: 'Beginner', lessons: 10, time: '18 hrs', progress: 0, tags: ['Beginner', 'Data Science', 'AI'], color: '#ffd54f' },
  { id: 'javascript', icon: '⚡', name: 'JavaScript', difficulty: 'Beginner', lessons: 10, time: '20 hrs', progress: 0, tags: ['Beginner', 'Web Development', 'App Development'], color: '#f7df1e' },
  { id: 'java', icon: '☕', name: 'Java', difficulty: 'Intermediate', lessons: 10, time: '24 hrs', progress: 0, tags: ['Intermediate', 'App Development'], color: '#ea6b4f' },
  { id: 'c', icon: '🔵', name: 'C', difficulty: 'Intermediate', lessons: 8, time: '22 hrs', progress: 0, tags: ['Intermediate'], color: '#5d8dd3' },
  { id: 'cpp', icon: '🟣', name: 'C++', difficulty: 'Advanced', lessons: 10, time: '28 hrs', progress: 0, tags: ['Advanced', 'App Development'], color: '#976ee5' },
  { id: 'html', icon: '🌐', name: 'HTML', difficulty: 'Beginner', lessons: 8, time: '10 hrs', progress: 0, tags: ['Beginner', 'Web Development'], color: '#ff8b59' },
  { id: 'css', icon: '🎨', name: 'CSS', difficulty: 'Beginner', lessons: 8, time: '12 hrs', progress: 0, tags: ['Beginner', 'Web Development'], color: '#5bb7f7' },
  { id: 'sql', icon: '🗄️', name: 'SQL', difficulty: 'Beginner', lessons: 8, time: '14 hrs', progress: 0, tags: ['Beginner', 'Data Science'], color: '#42c39a' },
  { id: 'react', icon: '⚛️', name: 'React', difficulty: 'Intermediate', lessons: 10, time: '22 hrs', progress: 0, tags: ['Intermediate', 'Web Development'], color: '#65d8ff' },
  { id: 'node', icon: '🟢', name: 'Node.js', difficulty: 'Intermediate', lessons: 10, time: '20 hrs', progress: 0, tags: ['Intermediate', 'Web Development'], color: '#74bd51' },
];

export const roadmap = [
  ['start', '🏁', 'Ready, set, code!', 'Complete'], ['basics', '🐍', 'Python Basics', 'Complete'],
  ['variables', '📦', 'Variables & Data Types', 'Complete'], ['conditions', '🔀', 'Conditions', 'Available'],
  ['loops', '🔁', 'Loops', 'Locked'], ['functions', '🧩', 'Functions', 'Locked'],
  ['collections', '📚', 'Lists & Dictionaries', 'Locked'], ['files', '🗂️', 'File Handling', 'Locked'],
  ['oop', '🧱', 'Object-Oriented Programming', 'Locked'], ['advanced', '⚡', 'Advanced Python', 'Locked'],
  ['projects', '🚀', 'Real-World Projects', 'Locked'], ['master', '🏆', 'Python Master', 'Locked'],
];

export const lesson = {
  title: 'Loops: repeat the useful stuff', badge: 'Python • Foundation 04',
  concept: 'A loop lets your program repeat a task without you writing the same instruction again and again.',
  analogy: 'Think of a playlist: instead of pressing play for every song, you press play once and it moves through each track.',
  syntax: 'for item in collection:\n    # do something with item',
  example: 'fruits = ["apple", "banana", "mango"]\nfor fruit in fruits:\n    print("I like " + fruit)',
  output: 'I like apple\nI like banana\nI like mango',
  mistakes: 'Forgetting the colon, mixing spaces and tabs, or expecting a loop to stop without a condition.',
  tip: 'Start with readable variable names. “fruit” tells a future you much more than “x”.',
};

export const challenges = [
  { title: 'Even or Odd', icon: '⚔️', level: 'Beginner', xp: 150, description: 'Write a function that returns whether a number is even or odd.', tests: 'evenOrOdd(12) → "Even"\nevenOrOdd(7) → "Odd"', starter: 'function evenOrOdd(number) {\n  // Your code here\n}', fn: 'evenOrOdd', cases: [[[12], 'Even'], [[7], 'Odd'], [[0], 'Even']], hint: 'The remainder operator (%) tells you whether a number divides cleanly by 2.' },
  { title: 'Vowel Counter', icon: '🔎', level: 'Beginner', xp: 150, description: 'Count the vowels in a word, ignoring letter case.', tests: 'countVowels("CodeQuest") → 4', starter: 'function countVowels(word) {\n  // Your code here\n}', fn: 'countVowels', cases: [[['CodeQuest'], 4], [['xyz'], 0], [['AEIOU'], 5]], hint: 'Lowercase the word first, then loop through it checking each letter against "aeiou".' },
  { title: 'Array Explorer', icon: '🧭', level: 'Intermediate', xp: 250, description: 'Return the largest number from an array.', tests: 'findLargest([2, 8, 3]) → 8', starter: 'function findLargest(numbers) {\n  // Your code here\n}', fn: 'findLargest', cases: [[[[2, 8, 3]], 8], [[[-1, -9, -3]], -1], [[[5]], 5]], hint: 'Track the biggest number seen so far as you loop, or try Math.max(...numbers).' },
  { title: 'Logic Labyrinth', icon: '🗝️', level: 'Advanced', xp: 400, description: 'Build a validator that returns true only if a password is at least 8 characters long and contains a number.', tests: 'validate("quest123") → true\nvalidate("short1") → false\nvalidate("noNumbersHere") → false', starter: 'function validate(password) {\n  // Your code here\n}', fn: 'validate', cases: [[['quest123'], true], [['short1'], false], [['noNumbersHere'], false]], hint: 'Check password.length first, then use a regex like /[0-9]/ to test for a digit.' },
];

export const projects = [
  { name: 'Quiz App', level: 'Beginner', time: '3–4 hrs', tech: 'HTML · CSS · JavaScript', icon: '🧠', progress: 40 },
  { name: 'To-Do App', level: 'Beginner', time: '4–5 hrs', tech: 'HTML · CSS · JavaScript', icon: '✅', progress: 0 },
  { name: 'Weather App', level: 'Intermediate', time: '6–8 hrs', tech: 'React · APIs', icon: '⛅', progress: 0 },
  { name: 'Expense Tracker', level: 'Intermediate', time: '8–10 hrs', tech: 'React · Charts', icon: '💸', progress: 0 },
  { name: 'AI Assistant', level: 'Advanced', time: '14–18 hrs', tech: 'Node · APIs · AI', icon: '🤖', progress: 0 },
  { name: 'Social Dashboard', level: 'Advanced', time: '16–20 hrs', tech: 'Full stack · SQL', icon: '📊', progress: 0 },
];

export const careers = [
  ['🌐', 'Full Stack Developer', 'Build complete web experiences', ['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'Portfolio']],
  ['🤖', 'AI / ML Engineer', 'Teach computers to spot patterns', ['Python', 'NumPy', 'Pandas', 'Statistics', 'Machine Learning', 'AI Projects']],
  ['📊', 'Data Scientist', 'Turn data into insight', ['Python', 'SQL', 'Pandas', 'Visualization', 'Statistics', 'Portfolio']],
  ['📱', 'App Developer', 'Create mobile-first products', ['JavaScript', 'React Native', 'APIs', 'State', 'Publish']],
  ['🎮', 'Game Developer', 'Make playable worlds', ['C++', 'Game math', 'Unity', 'Physics', 'Build']],
  ['🔐', 'Cybersecurity', 'Help keep systems safe', ['Linux', 'Networking', 'Python', 'Security', 'Labs']],
  ['☁️', 'Cloud Engineer', 'Ship resilient cloud systems', ['Linux', 'Networking', 'Docker', 'Cloud', 'Automation']],
];

export const achievements = [
  ['🏅', 'First Line of Code', true], ['🔥', '7 Day Streak', true], ['🐍', 'Python Explorer', true],
  ['⚡', 'JavaScript Ninja', false], ['🕵️', 'Bug Hunter', false], ['💯', 'Perfect Score', false],
  ['🚀', 'Project Builder', false], ['🏆', 'Roadmap Master', false], ['👑', 'CodeQuest Legend', false],
];

export const courseContent = {
  python: { label: 'Python', icon: '🐍', lessons: [
    ['Python Basics', 'Meet print(), comments, and how Python reads your instructions.', 'Create a greeting program that prints your name and favourite hobby.'],
    ['Variables & Data Types', 'Store text, whole numbers, decimals, and true/false values in named containers.', 'Build a mini profile using name, age, and is_learning variables.'],
    ['Conditions', 'Use if, elif, and else to make a program choose the right action.', 'Write a ticket checker: children under 12 enter free, everyone else pays.'],
    ['Loops', 'Repeat a useful task over a collection or while a condition is true.', 'Print every even number from 2 to 20.'],
    ['Functions', 'Bundle a reusable action into a function with inputs and a result.', 'Create a function that returns the area of a rectangle.'],
    ['Lists & Dictionaries', 'Organise multiple values and look them up by position or label.', 'Store three quiz scores and calculate their average.'],
    ['File Handling', 'Read and write text files safely using with open.', 'Save a short daily learning note to a file.'],
    ['Object-Oriented Programming', 'Model a real thing with a class, properties, and behaviours.', 'Create a Book class with a title and a borrow method.'],
    ['Advanced Python', 'Use modules, errors, comprehensions, and APIs with confidence.', 'Fetch and display a useful value from a safe practice API.'],
    ['Build a Python Project', 'Combine your skills into a small program someone can use.', 'Build a number guessing game with attempts and hints.']
  ]},
  javascript: { label: 'JavaScript', icon: '⚡', lessons: [
    ['JavaScript Basics', 'Learn console.log, comments, and how browsers run JavaScript.', 'Print a welcome message in the console.'],
    ['Variables & Values', 'Use let and const to store information your program needs.', 'Store a game score and add 25 bonus points.'],
    ['Decisions', 'Use if, else if, and else to react to user choices.', 'Show whether a temperature means jacket weather.'],
    ['Loops', 'Repeat actions with for, while, and for...of.', 'Add all numbers from 1 to 10.'],
    ['Functions', 'Create named reusable blocks that accept input.', 'Write a function that turns a name into a greeting.'],
    ['Arrays & Objects', 'Group related values and describe things with properties.', 'Make a playlist object with title and three songs.'],
    ['The DOM', 'Select and update elements users see in a webpage.', 'Change a button label when it is clicked.'],
    ['Events', 'Make websites respond to clicks, typing, and forms.', 'Build a counter button that increases a number.'],
    ['Async JavaScript', 'Wait for data without freezing the page.', 'Request and display a random activity.'],
    ['Build a Web Project', 'Bring the course together in a shareable mini app.', 'Build a quiz with score feedback.']
  ]},
  html: { label: 'HTML', icon: '🌐', lessons: [['Page Structure','Understand tags, nesting, and the document outline.','Create a page with a heading and paragraph.'],['Text & Links','Use semantic text and accessible links.','Build a list of three useful coding links.'],['Images','Add meaningful images with alt text.','Create a photo card with a descriptive caption.'],['Lists & Tables','Present ordered information clearly.','Make a weekly study plan table.'],['Forms','Collect user input with labels and controls.','Build a feedback form with a submit button.'],['Semantic Layout','Use header, main, section, and footer.','Structure a personal portfolio page.'],['Accessibility','Make content usable with a keyboard and screen reader.','Fix missing labels in a sample form.'],['Build a Page','Plan and create a useful full page.','Build a simple recipe page.']]},
  css: { label: 'CSS', icon: '🎨', lessons: [['CSS Basics','Connect styles and target elements with selectors.','Give a heading its own colour and size.'],['Box Model','Control space with margin, padding, and borders.','Create a neat profile card.'],['Typography','Make text comfortable and easy to scan.','Style a readable article intro.'],['Flexbox','Arrange items in one dimension.','Center a navigation bar.'],['Grid','Create responsive two-dimensional layouts.','Build a gallery with three cards.'],['Responsive Design','Adapt layouts for small screens.','Make a card grid stack on mobile.'],['Animation','Use subtle transitions and keyframes.','Add a button hover animation.'],['Build a Landing Page','Combine layout and visual design skills.','Style a polished product landing page.']]},
  sql: { label: 'SQL', icon: '🗄️', lessons: [['Database Basics','Understand tables, rows, columns, and primary keys.','Plan a table for a book collection.'],['SELECT','Read the fields you need from a table.','List every book title and author.'],['WHERE','Filter data with clear conditions.','Find books published after 2020.'],['Sorting & Limits','Order results and focus on a useful slice.','Show the five highest scoring students.'],['Aggregate Functions','Count, total, and average your data.','Calculate the average quiz score.'],['GROUP BY','Summarise results by category.','Count orders per product category.'],['JOINs','Combine related tables safely.','Show each student with their course name.'],['Build a Query Project','Answer real questions from data.','Create a mini sales report.']]},
  java: { label: 'Java', icon: '☕', lessons: [
    ['Java Basics', 'Meet classes, the main method, and System.out.println.', 'Print your name and a fun fact about yourself.'],
    ['Variables & Types', 'Declare typed variables like int, double, and boolean.', 'Store a temperature and print whether it is hot.'],
    ['Conditionals', 'Use if, else if, and else to branch your logic.', 'Write a grade calculator from a numeric score.'],
    ['Loops', 'Repeat work with for and while loops.', 'Print the 5-times table.'],
    ['Methods', 'Package logic into a reusable, typed method.', 'Write a method that returns the square of a number.'],
    ['Arrays', 'Store and loop over a fixed collection of values.', 'Find the total of an array of prices.'],
    ['Classes & Objects', 'Model real things with fields and constructors.', 'Create a Dog class with a name and a bark method.'],
    ['Inheritance', 'Share behaviour between related classes.', 'Make a Puppy class that extends Dog.'],
    ['Exceptions', 'Handle errors gracefully with try/catch.', 'Catch a divide-by-zero error safely.'],
    ['Build a Java Project', 'Combine your skills into a small console app.', 'Build a simple contact list manager.']
  ]},
  c: { label: 'C', icon: '🔵', lessons: [
    ['C Basics', 'Understand main(), printf, and compiling a program.', 'Print your name using printf.'],
    ['Variables & Types', 'Use int, float, and char with the right format specifiers.', 'Store and print your age and height.'],
    ['Conditionals', 'Branch logic using if, else if, and else.', 'Check if a number is positive, negative, or zero.'],
    ['Loops', 'Repeat instructions with for and while.', 'Print numbers from 1 to 10.'],
    ['Functions', 'Split your program into reusable functions.', 'Write a function that returns the max of two numbers.'],
    ['Arrays', 'Store a fixed list of values in memory.', 'Find the sum of an array of five numbers.'],
    ['Pointers', 'Understand how variables live in memory.', 'Swap two numbers using pointers.'],
    ['Build a C Project', 'Bring the basics together in one program.', 'Build a simple calculator using functions.']
  ]},
  cpp: { label: 'C++', icon: '🟣', lessons: [
    ['C++ Basics', 'Learn cout, cin, and the structure of a C++ program.', 'Print a welcome message with cout.'],
    ['Variables & Types', 'Use int, double, string, and bool.', 'Store a product name and price.'],
    ['Conditionals', 'Use if/else to control program flow.', 'Write a simple age-based access checker.'],
    ['Loops', 'Repeat actions with for, while, and do-while.', 'Print the Fibonacci sequence up to 10 terms.'],
    ['Functions', 'Write reusable functions with parameters and return types.', 'Write a function that checks if a number is prime.'],
    ['Vectors', 'Work with dynamic, resizable lists of data.', 'Store and print a list of high scores.'],
    ['Classes', 'Define your own types with member functions.', 'Create a Rectangle class with an area method.'],
    ['References & Pointers', 'Understand how C++ handles memory and references.', 'Write a function that modifies a value by reference.'],
    ['STL Basics', 'Use built-in containers and algorithms.', 'Sort a vector of numbers using the STL.'],
    ['Build a C++ Project', 'Combine your skills into a small program.', 'Build a simple student grade tracker.']
  ]},
  react: { label: 'React', icon: '⚛️', lessons: [
    ['React Basics', 'Understand components, JSX, and rendering.', 'Create a Welcome component that shows your name.'],
    ['Props', 'Pass data into a component from its parent.', 'Build a Card component that accepts a title prop.'],
    ['State', 'Give a component memory with useState.', 'Build a click counter component.'],
    ['Events', 'Respond to user interaction like clicks and typing.', 'Build an input that shows live character count.'],
    ['Conditional Rendering', 'Show different UI based on state.', 'Toggle a message between "Online" and "Offline".'],
    ['Lists & Keys', 'Render arrays of data efficiently.', 'Render a list of favourite languages.'],
    ['useEffect', 'Run code in response to renders or data changes.', 'Fetch and display data when a component loads.'],
    ['Forms', 'Handle controlled inputs and submissions.', 'Build a simple feedback form component.'],
    ['Component Composition', 'Combine small components into bigger UIs.', 'Build a Card list from reusable Card components.'],
    ['Build a React Project', 'Bring the pieces together into a mini app.', 'Build a to-do list component with add and remove.']
  ]},
  node: { label: 'Node.js', icon: '🟢', lessons: [
    ['Node Basics', 'Understand what Node.js is and run your first script.', 'Print a message using console.log in a .js file.'],
    ['Modules', 'Organise code with require/import and exports.', 'Create a module that exports a greet function.'],
    ['NPM & Packages', 'Install and use third-party packages.', 'List the dependencies you would use for a small API.'],
    ['File System', 'Read and write files with the fs module.', 'Write a script that saves a note to a text file.'],
    ['Creating a Server', 'Build a basic HTTP server.', 'Create a server that responds with "Hello, Node!"'],
    ['Routing', 'Respond differently based on the request path.', 'Add a /about route to your server.'],
    ['Express Basics', 'Simplify server code with the Express framework.', 'Rebuild your server using Express.'],
    ['Middleware', 'Run shared logic before your route handlers.', 'Add a logging middleware to your Express app.'],
    ['Working with JSON APIs', 'Send and receive structured data.', 'Create an endpoint that returns a JSON list of tasks.'],
    ['Build a Node Project', 'Combine your skills into a small backend.', 'Build a simple notes API with add and list endpoints.']
  ]}
};

export const leaderboard = [
  { name: 'Aarav', avatar: '🦊', xp: 4200 },
  { name: 'Wei', avatar: '🐙', xp: 3150 },
  { name: 'Sofia', avatar: '🦄', xp: 2680 },
  { name: 'Liam', avatar: '🤖', xp: 1940 },
  { name: 'Priya', avatar: '🧠', xp: 1120 },
  { name: 'Noah', avatar: '✨', xp: 640 },
];

const languageMasteryBadges = Object.entries(courseContent).map(([id, course]) => ({
  icon: course.icon,
  name: `${course.label} Master`,
  test: (s) => s.learningLanguage === id && s.completed.length >= course.lessons.length,
}));

export const achievementDefs = [
  { icon: '🏅', name: 'First Line of Code', test: (s) => s.completed.length >= 1 || s.xp > 0 },
  { icon: '🔥', name: '7 Day Streak', test: (s) => s.streak >= 7 },
  ...languageMasteryBadges,
  { icon: '🕵️', name: 'Bug Hunter', test: (s) => (s.debugSolvedCases || []).length >= 1 },
  { icon: '🎖️', name: 'Ace Detective', test: (s) => (s.debugSolvedCases || []).length >= debugCases.length },
  { icon: '💯', name: 'Perfect Score', test: (s) => (s.challengesSolved || []).length >= challenges.length },
  { icon: '🚀', name: 'Problem Solver', test: (s) => (s.challengesSolved || []).length >= 1 },
  { icon: '🏆', name: 'Roadmap Master', test: (s, roadmapLength) => s.completed.length >= roadmapLength },
  { icon: '👑', name: 'CodeQuest Legend', test: (s) => s.xp >= 2000 },
];

export const debugCases = [
  { id: 'missing-plus', title: 'Case file #004 · Missing operator', code: 'const name = "Alex";\nconsole.log("Hello " name);', question: 'The console refuses to greet Alex. What is missing?', options: [['semicolon', 'A semicolon'], ['plus', 'A + operator'], ['quotes', 'More quotes']], correct: 'plus', hint: 'Two string values sitting next to each other need something to join them together.', fixed: 'const name = "Alex";\nconsole.log("Hello " + name);' },
  { id: 'off-by-one', title: 'Case file #011 · The loop that goes too far', code: 'const list = ["a", "b", "c"];\nfor (let i = 0; i <= list.length; i++) {\n  console.log(list[i]);\n}', question: 'This loop prints "undefined" at the end. What is the bug?', options: [['start', 'The loop should start at 1'], ['operator', 'The condition should use < instead of <='], ['name', 'The array needs a different name']], correct: 'operator', hint: 'Compare the last valid index of the array to what the loop condition actually allows.', fixed: 'const list = ["a", "b", "c"];\nfor (let i = 0; i < list.length; i++) {\n  console.log(list[i]);\n}' },
  { id: 'assignment-bug', title: 'Case file #017 · The condition that is always true', code: 'let score = 40;\nif (score = 100) {\n  console.log("Perfect!");\n} else {\n  console.log("Keep practicing");\n}', question: 'This always prints "Perfect!" no matter the score. Why?', options: [['single-equals', 'A single = assigns instead of compares'], ['missing-else', 'The else block is missing'], ['wrong-type', 'Score should be a string']], correct: 'single-equals', hint: 'One equals sign sets a value. Two or three equals signs compare values.', fixed: 'let score = 40;\nif (score === 100) {\n  console.log("Perfect!");\n} else {\n  console.log("Keep practicing");\n}' },
  { id: 'missing-return', title: 'Case file #022 · The function that returns nothing', code: 'function double(n) {\n  n * 2;\n}\nconsole.log(double(5));', question: 'This logs "undefined" instead of 10. What is missing?', options: [['return', 'The return keyword'], ['parentheses', 'Parentheses around n'], ['console', 'A console.log inside the function']], correct: 'return', hint: 'Calculating a value inside a function is not the same as sending it back to whoever called the function.', fixed: 'function double(n) {\n  return n * 2;\n}\nconsole.log(double(5));' },
  { id: 'bracket-mismatch', title: 'Case file #029 · The object that will not close', code: 'const user = {\n  name: "Sam",\n  level: 3;\nconsole.log(user.name);', question: 'This code throws a syntax error before it can even run. What is wrong?', options: [['comma', 'level: 3 should end with a comma, and the object needs a closing }'], ['quotes', 'name needs single quotes instead of double quotes'], ['semicolon', 'console.log needs a semicolon before it']], correct: 'comma', hint: 'Every { needs a matching }, and object properties are separated by commas, not semicolons.', fixed: 'const user = {\n  name: "Sam",\n  level: 3\n};\nconsole.log(user.name);' },
];
