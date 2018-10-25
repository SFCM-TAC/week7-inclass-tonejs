We will be using the Tone.js library: https://tonejs.github.io/

The library has already been downloaded for you and is in the js folder as Tone.min.js. By including this from our HTMl page, we are able to use all of the library functionality in our scripts!

To access local audio files you need to run you app on a *server*. This can be done pretty easily using a simple python server:

1. Open the 'terminal' application on your mac
2. Type 'cd /Path/to/parent/folder' and hit enter to navigate to your app folder (you can also drag a folder into the command prompt to have it auto-fill the path)
3. Type 'python -m SimpleHTTPServer 8000' in the terminal to start the local server
4. Go to localhost:8000 in your browser to load your web app!
5. It should load changes to your files automatically, but if you need to restart the sever: press 'ctrl+C' in the terminal to stop the server. Run 'python -m SimpleHTTPServer 8000' again to restart it with your changes.
