import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ApiPlatform from './ApiPlatform';

describe('Rick and Morty', () => {
  it.skip('Searches and renders character data', async () => {
      render(<ApiPlatform/>)
  }