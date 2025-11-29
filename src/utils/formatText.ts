export const sanitize = (text: string): string => 
  text.replace(/<[^>]*>/g, '').trim().slice(0, 500);

export const formatText = (text: string): string => 
  text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
