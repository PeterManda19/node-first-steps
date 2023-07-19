import figlet from 'figlet-promised';

export default async function greet(name){
    const asciiArt = await generateAsciiArtGreeting(name);
    return "Hello, " + name + " - from ES modules\n${asciiArt";
};

export async function generateAsciiArtGreeting(name) {
    try {
      const asciiArt = await figlet(name);
      return asciiArt;
    } catch (error) {
      console.error('Error generating ASCII art:', error);
      return '';
    }
}
  