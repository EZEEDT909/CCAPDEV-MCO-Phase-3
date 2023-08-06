const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  // If the requested URL is '/', serve 'homepage.html' by default
  if (filePath === './') {
    filePath = './index.html';
	} else if (filePath === './register') {
    filePath = './register.html';
	} else if (filePath === './login') {
    filePath = './login.html';
	} else if (filePath === './profile') {
    filePath = './profile.html';
	} else if (filePath === './edit_profile') {
    filePath = './edit_profile.html';
	} else if (filePath === './burgerking') {
    filePath = './burgerking.html';
	} else if (filePath === './jollibee') {
    filePath = './jollibee.html';
	} else if (filePath === './kfc') {
    filePath = './kfc.html';
	} else if (filePath === './mcdo') {
    filePath = './mcdo.html';
	} else if (filePath === './pizzahut') {
    filePath = './pizzahut.html';
	}
  

  // Determine the content type based on the file extension
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        // Internal server error
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
    } else {
      // Successful response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});