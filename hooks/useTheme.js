import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
