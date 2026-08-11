import re

file_path = 'w:/React Revision/Aditya Portfolio/portfolio/frontend/src/components/Navbar.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <Link to="/path">Text</Link> with <a href="#path">Text</a>
# If path is "/", replace with "#home"

def replacer(match):
    path = match.group(1)
    text = match.group(2)
    href = "#home" if path == "/" else "#" + path.strip("/")
    return f'<a href="{href}">{text}</a>'

content = re.sub(r'<Link\s+to="([^"]+)">([^<]+)</Link>', replacer, content)

# Remove import
content = re.sub(r'import { Link } from "react-router-dom";\n?', '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Navbar.jsx updated successfully!")
