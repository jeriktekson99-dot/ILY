import { TimelineEvent, PhotoMemory, Reason } from './types';
import { Heart, Calendar, MapPin, Infinity, Star } from 'lucide-react';
import React from 'react';

export const APP_NAME = "Lumière d'Amour";

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "The Beginning",
    title: "How We Met",
    description: "It started with a simple glance that felt like destiny. The world slowed down, and in that crowded room, all I saw was you.",
    icon: <MapPin className="w-5 h-5 text-wine-900" />
  },
  {
    year: "First Spark",
    title: "Our First Date",
    description: "Nervous laughter, deep conversations, and the realization that I never wanted the night to end. The coffee went cold, but our hearts warmed up.",
    icon: <Calendar className="w-5 h-5 text-wine-900" />
  },
  {
    year: "The Realization",
    title: "The Moment I Knew",
    description: "It wasn't grand. It was a Tuesday, you were laughing at your own joke, and I realized I wanted to hear that laugh for the rest of my life.",
    icon: <Heart className="w-5 h-5 text-wine-900" />
  },
  {
    year: "Eternity",
    title: "Today & Forever",
    description: "Every day since has been a gift. We've built a world of our own, and I promise to keep building it with you, brick by loving brick.",
    icon: <Infinity className="w-5 h-5 text-wine-900" />
  }
];

// ==================================================================================
// PHOTO MEMORIES
// ==================================================================================
// NOTE: Since this project runs directly in the browser (Native ESM), you cannot 
// "import" images. You must use string paths or external URLs.
//
// TO USE YOUR OWN PHOTOS:
// 1. Create a folder named "images" in the project ROOT (next to index.html).
// 2. Put your files there (e.g., kiss.jpg).
// 3. Change the url below to: "images/kiss.jpg"
// ==================================================================================

export const MEMORIES: PhotoMemory[] = [
  { 
    id: 1, 
    // Fallback: "images/kiss.jpg"
    url: "images/kiss.jpg", 
    caption: "Your Kisses", 
    rotation: -2 
  },
  { 
    id: 2, 
    // Fallback: "images/sleepyhead.jpg"
    url: "images/sleepyhead.jpg", 
    caption: "Sleepy Head", 
    rotation: 2 
  },
  { 
    id: 3, 
    // Fallback: "images/selfie.jpg"
    url: "images/selfie.jpg", 
    caption: "Pure Joy", 
    rotation: -2 
  },
  { 
    id: 4, 
    // Fallback: "images/rawr.jpg"
    url: "images/rawr.jpg", 
    caption: "Silly Moments", 
    rotation: 2 
  },
];

export const REASONS: Reason[] = [
  { id: 1, text: "The way you smile lights up the darkest room." },
  { id: 2, text: "Your kindness knows no bounds." },
  { id: 3, text: "You make the ordinary feel extraordinary." },
  { id: 4, text: "How you always know exactly what I need." },
  { id: 5, text: "Your laugh is my favorite melody." },
  { id: 6, text: "You challenge me to be better every day." },
];

export const LOVE_LETTER_CONTENT = `
My Dearest,

As I sit here writing this, I find myself struggling to find words that can truly encompass what you mean to me. How does one describe the sun to someone who has never felt warmth? That is what you are to me—essential, radiant, and life-giving.

From the moment you entered my life, everything changed. The colors became brighter, the music sweeter, and the future less dauntless. You are my anchor in the storm and my sail in the wind.

This site is just a collection of pixels and code, but I hope it conveys a fraction of the love I hold for you in my heart. You are my best friend, my confidant, and my greatest love.

Yours, always.
`;