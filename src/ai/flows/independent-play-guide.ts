'use server';

/**
 * @fileOverview Provides a Genkit flow for analyzing a song and providing guidance to users
 *   on how to play it without relying on tabs or sheet music.
 *
 * - analyzeSong - A function that handles the song analysis process.
 * - AnalyzeSongInput - The input type for the analyzeSong function.
 * - AnalyzeSongOutput - The return type for the analyzeSong function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSongInputSchema = z.object({
  songDataUri: z
    .string()
    .describe(
      'The audio file of the song to analyze, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'    ),
  instrument: z
    .string()
    .describe('The instrument the user intends to play the song on.'),
  userSkillLevel: z
    .string()
    .describe(
      'The skill level of the user (e.g., beginner, intermediate, advanced).'
    ),
});
export type AnalyzeSongInput = z.infer<typeof AnalyzeSongInputSchema>;

const AnalyzeSongOutputSchema = z.object({
  guidance: z
    .string()
    .describe(
      'Guidance on how to play the song on the specified instrument without relying on tabs or sheet music, tailored to the user skill level.'
    ),
});
export type AnalyzeSongOutput = z.infer<typeof AnalyzeSongOutputSchema>;

export async function analyzeSong(input: AnalyzeSongInput): Promise<AnalyzeSongOutput> {
  return analyzeSongFlow(input);
}

const analyzeSongPrompt = ai.definePrompt({
  name: 'analyzeSongPrompt',
  input: {schema: AnalyzeSongInputSchema},
  output: {schema: AnalyzeSongOutputSchema},
  prompt: `You are an expert music teacher. Analyze the provided song and
generate guidance on how to play it on the specified instrument without
relying on tabs or sheet music. Tailor the guidance to the user's skill
level.

Song: {{media url=songDataUri}}
Instrument: {{{instrument}}}
User Skill Level: {{{userSkillLevel}}}

Guidance:`,
});

const analyzeSongFlow = ai.defineFlow(
  {
    name: 'analyzeSongFlow',
    inputSchema: AnalyzeSongInputSchema,
    outputSchema: AnalyzeSongOutputSchema,
  },
  async input => {
    const {output} = await analyzeSongPrompt(input);
    return output!;
  }
);
