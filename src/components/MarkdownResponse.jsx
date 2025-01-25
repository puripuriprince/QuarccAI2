import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function MarkdownResponse({ content }) {
    return (
        <div className="prose prose-purple max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    a: ({ node, ...props }) => (
                        <a 
                            {...props} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium hover:underline"
                        >
                            {props.children}
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    ),
                    p: ({ node, ...props }) => (
                        <p {...props} className="mb-4 text-gray-700" />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong {...props} className="font-semibold text-purple-700" />
                    ),
                    h1: ({ node, ...props }) => (
                        <h1 {...props} className="text-2xl font-bold text-gray-900 mb-4" />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 {...props} className="text-xl font-bold text-gray-900 mb-3" />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3 {...props} className="text-lg font-bold text-gray-900 mb-2" />
                    ),
                    code: ({ node, inline, ...props }) => (
                        <code 
                            {...props}
                            className={`${inline ? 'bg-purple-50 text-purple-700 rounded px-1' : 'block bg-gray-800 text-white p-4 rounded-lg'}`}
                        />
                    )
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownResponse; 