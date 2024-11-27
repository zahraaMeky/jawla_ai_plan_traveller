import React from 'react';
import { useParams } from 'react-router-dom';
import { stories } from "../constant";

export const Article = () => {
  const { id } = useParams();  // Get the article ID from the URL
  const story = stories.find((story) => story.id === id);  // Find the story by ID

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className="py-12">
      <div className="mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center">{story.title}</h1>
        <img src={story.image} alt={story.title} className="w-full mb-4" />
        <p className="text-gray-600">{story.desc}</p>
        {/* Add more article content here */}
      </div>
    </div>
  );
};
