import React from 'react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface PhotoMemory {
  id: number;
  url: string;
  caption: string;
  rotation: number;
}

export interface Reason {
  id: number;
  text: string;
}

export enum Section {
  HERO = 'hero',
  TIMELINE = 'timeline',
  LETTER = 'letter',
  GALLERY = 'gallery',
  REASONS = 'reasons',
  COUNTDOWN = 'countdown',
  SURPRISE = 'surprise'
}