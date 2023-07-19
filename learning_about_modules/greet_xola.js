// import the chalk module
import chalk from 'chalk';
// import the greet module that is in the current folder
import greet from './greet.js'
import figlet from 'figlet-promised';

const name = 'Xola';

// Generate the ASCII art based on the name
async function generateAsciiArtGreeting(name) {
    try {
      const asciiArt = await figlet(name);
      return asciiArt;
    } catch (error) {
      console.error('Error generating ASCII art:', error);
      return '';
    }
  }
  
  (async () => {
    try {
      // Call the greet function with the name "Xola" to get the colorful greeting
      const colorfulGreeting = chalk.bgGreen.black(greet(name));
  
      // Generate the ASCII art and style it with chalk
      const asciiArt = await generateAsciiArtGreeting(name);
      const styledAsciiArt = chalk.bgGreen.black(asciiArt);
  
      // Combine the colorful greeting and the ASCII art
      const styledMessage = `${colorfulGreeting}\n${styledAsciiArt}`;
  
      // Print the combined result on the screen
      console.log(styledMessage);
    } catch (error) {
      console.error('Error:', error);
    }
})();
