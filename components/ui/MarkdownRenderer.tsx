import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const blocks = content.split('\n\n');
  
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-white">
      {blocks.map((block, idx) => {
        // Horizontal Rule
        if (block.trim() === '---') {
          return <hr key={idx} className="my-8 border-white/10" />;
        }
        
        // H1
        if (block.startsWith('# ')) {
          return <h1 key={idx} className="text-3xl font-bold mt-12 mb-6 text-white">{renderInline(block.slice(2))}</h1>;
        }
        // H2
        if (block.startsWith('## ')) {
          return <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-white">{renderInline(block.slice(3))}</h2>;
        }
        // H3
        if (block.startsWith('### ')) {
          return <h3 key={idx} className="text-xl font-bold mt-8 mb-4 text-white">{renderInline(block.slice(4))}</h3>;
        }
        
        // List
        if (block.includes('\n* ') || block.startsWith('* ')) {
          const items = block.split('\n').filter(line => line.trim().startsWith('* '));
          return (
            <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
              {items.map((item, i) => (
                <li key={i} className="text-neutral-300">{renderInline(item.slice(2))}</li>
              ))}
            </ul>
          );
        }
        
        // Ordered List (basic support)
        if (block.match(/^[0-9]+\. /)) {
          const items = block.split('\n').filter(line => line.trim().match(/^[0-9]+\. /));
          return (
            <ol key={idx} className="list-decimal pl-6 mb-6 space-y-2">
              {items.map((item, i) => (
                <li key={i} className="text-neutral-300">{renderInline(item.replace(/^[0-9]+\. /, ''))}</li>
              ))}
            </ol>
          );
        }

        // Paragraph
        return <p key={idx} className="mb-6 text-neutral-300 leading-relaxed">{renderInline(block)}</p>;
      })}
    </div>
  );
}

function renderInline(text: string) {
  // Bold
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
