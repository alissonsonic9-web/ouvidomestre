'use server';

import { analyzeSong } from '@/ai/flows/independent-play-guide';

type PlayGuideInput = {
  songDataUri: string;
  instrument: string;
  userSkillLevel: string;
};

export async function generatePlayGuide(input: PlayGuideInput): Promise<string> {
  if (!input.songDataUri || !input.instrument || !input.userSkillLevel) {
    throw new Error('Missing required input for generating play guide.');
  }

  try {
    const result = await analyzeSong(input);
    return result.guidance;
  } catch (error) {
    console.error('Error in generatePlayGuide action:', error);
    // Provide a more user-friendly error message
    return 'Ocorreu um erro ao processar sua solicitação. A IA pode estar sobrecarregada ou o formato do arquivo pode não ser suportado. Por favor, tente novamente mais tarde.';
  }
}
