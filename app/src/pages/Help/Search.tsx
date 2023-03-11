import React, { ChangeEvent, useState } from "react";
// import questions from "./faq.json";
// import FaqBanner from "./FaqBanner";

// interface Properties {}

// const CommonQuestions: React.FC = () => {
//   let common = [];
//   for (let i = 0; i < 2; i++) {
//     common.push(questions[i]);
//   }
//   const searchResults = common.map((question) => (
//       <FaqBanner
//         key={question.id}
//         question={question.question}
//         answer={question.answer}
//       />
//     )
//   )
//   return <>{searchResults}</>;
// };

// const Search: React.FC<Properties> = () => {
//   const [results, setResults] = useState(<CommonQuestions />);
//   const [query, setQuery] = useState("");
//   const searchChanged = (event: ChangeEvent<HTMLInputElement>) => {
//     setQuery(event.target.value);
//     const searchResults = questions.map((question) => {
//       return (
//         <FaqBanner
//           key={question.id}
//           question={question.question}
//           answer={question.answer}
//         />
//       )
//     })
//   }
//   return (
//     <>
//       <input type="text" value={query} onChange={searchChanged}></input>
//       {results}
//     </>
//   );
// };

// export default Search;
