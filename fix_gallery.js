const fs = require('fs');
let c = fs.readFileSync('components/ui/Gallery.tsx', 'utf8');

c = c.replace(/\s*category:\s*string;/g, '');
c = c.replace(/\s*location:\s*string;/g, '');

c = c.replace(/\s*category:\s*".*",/g, '');
c = c.replace(/\s*location:\s*".*",/g, '');

c = c.replace(/\s*<span className="text-xs font-mono text-blue-400 font-medium tracking-wider block mb-1">\s*?? \{item\.location\}\s*<\/span>/g, '');

c = c.replace(/\s*<span className="text-\[11px\] font-semibold uppercase tracking-wider text-white\/90 bg-black\/40 backdrop-blur-md px-3 py-1 rounded-full border border-white\/20">\s*\{item\.category\}\s*<\/span>/g, '');

c = c.replace('justify-between z-10', 'justify-end z-10');

c = c.replace(/\s*<p className="text-neutral-400 text-sm">[\s\S]*?<\/p>/g, '');

fs.writeFileSync('components/ui/Gallery.tsx', c);
