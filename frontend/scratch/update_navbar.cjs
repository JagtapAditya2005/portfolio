const fs = require('fs');
const file = 'w:/React Revision/Aditya Portfolio/portfolio/frontend/src/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<Link to="\/([^"]*)">([^<]+)<\/Link>/g, (match, path, text) => {
    const href = path === '' ? '#home' : '#' + path;
    return `<a href="${href}">${text}</a>`;
});

content = content.replace(/import \{ Link \} from "react-router-dom";\n?/g, '');

fs.writeFileSync(file, content);
console.log('Navbar updated!');
