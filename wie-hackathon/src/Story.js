// // Calendar.js
// import React from 'react';
// import StoryCard from "./StoryCard"; // Import StoryCard component
// import "./StoryCard.css"; // Import global styles


// // Data for cultural stories
// const stories = [
//   {
//     title: "The Tale of the Dragon",
//     author: "Wei Li",
//     content:
//       "In Chinese folklore, the dragon is a symbol of strength, wisdom, and good fortune. It is said that the dragon once ruled the heavens and controlled the elements...",
//   },
//   {
//     title: "The Legend of Anansi",
//     author: "Kwame Nkrumah",
//     content:
//       "Anansi, the spider, is a trickster figure from West African mythology. Known for his cleverness, Anansi outwits others to teach valuable lessons about wisdom and survival...",
//   },
//   {
//     title: "The Story of the Sun Dance",
//     author: "Tashina Whitefeather",
//     content:
//       "The Sun Dance is a sacred ceremony in Native American cultures, particularly among the Plains tribes. It celebrates renewal, strength, and the connection between humans and the Earth...",
//   },
//   {
//     title: "Diwali: Festival of Lights",
//     author: "Ravi Kumar",
//     content:
//       "Diwali, the Festival of Lights, celebrates the victory of light over darkness and good over evil. Families come together to light oil lamps, exchange sweets, and share joy...",
//   },
//   {
//     title: "The Sami Reindeer Herding Tradition",
//     author: "Kari Nilsen",
//     content:
//       "For the Sami people of Northern Europe, reindeer herding is not just a way of life—it is a deep cultural tradition that connects them to the land, nature, and their ancestors...",
//   },
//   {
//     title: "The Day of the Dead",
//     author: "Sofia Rodriguez",
//     content:
//       "In Mexican culture, the Day of the Dead (Día de los Muertos) is a celebration of life and death. Families gather to honor their ancestors with altars, food, and marigolds...",
//   },
// ];


// const App = () => {
//   return (
//     <div>
//       <h1>Cultural Exchange Stories</h1>
//       <div className="story-grid">
//         {stories.map((story, index) => (
//           <StoryCard
//             key={index}
//             title={story.title}
//             author={story.author}
//             content={story.content}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


// export default App;

import React from "react";
import StoryCard from "./StoryCard"; // Import StoryCard component
import "./StoryCard.css"; // Import global styles

// Data for cultural stories
const stories = [
  {
    title: "The Tale of the Dragon",
    author: "Wei Li",
    content:
      "In Chinese folklore, the dragon is a symbol of strength, wisdom, and good fortune. It is said that the dragon once ruled the heavens and controlled the elements...",
  },
  {
    title: "The Legend of Anansi",
    author: "Kwame Nkrumah",
    content:
      "Anansi, the spider, is a trickster figure from West African mythology. Known for his cleverness, Anansi outwits others to teach valuable lessons about wisdom and survival...",
  },
  {
    title: "The Story of the Sun Dance",
    author: "Tashina Whitefeather",
    content:
      "The Sun Dance is a sacred ceremony in Native American cultures, particularly among the Plains tribes. It celebrates renewal, strength, and the connection between humans and the Earth...",
  },
  {
    title: "Diwali: Festival of Lights",
    author: "Ravi Kumar",
    content:
      "Diwali, the Festival of Lights, celebrates the victory of light over darkness and good over evil. Families come together to light oil lamps, exchange sweets, and share joy...",
  },
  {
    title: "The Sami Reindeer Herding Tradition",
    author: "Kari Nilsen",
    content:
      "For the Sami people of Northern Europe, reindeer herding is not just a way of life—it is a deep cultural tradition that connects them to the land, nature, and their ancestors...",
  },
  {
    title: "The Day of the Dead",
    author: "Sofia Rodriguez",
    content:
      "In Mexican culture, the Day of the Dead (Día de los Muertos) is a celebration of life and death. Families gather to honor their ancestors with altars, food, and marigolds...",
  },
];

const Story = ({ setCurrentPage }) => {
  return (
    <div className="page-container">
      <nav className="nav-bar">
        <button
          onClick={() => setCurrentPage("home")}
          className="nav-button"
        >
          Back to Home
        </button>
      </nav>

      <h1>Cultural Exchange Stories</h1>
      <div className="story-grid">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            author={story.author}
            content={story.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Story;
