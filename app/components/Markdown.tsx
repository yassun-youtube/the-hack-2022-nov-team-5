'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

export const Markdown: React.FC<{ text: string }> = ({ text }) => (
  <ReactMarkdown components={{ code: CodeBlock }}>{text}</ReactMarkdown>
);
