'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { generatePlayGuide } from '@/app/actions';
import { Loader2, Music, Wand2 } from 'lucide-react';

export default function PlayGuideSection() {
  const [instrument, setInstrument] = useState('');
  const [skillLevel, setSkillLevel] = useState('Iniciante');
  const [file, setFile] = useState<File | null>(null);
  const [guidance, setGuidance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
       if (selectedFile.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          variant: 'destructive',
          title: 'Arquivo muito grande',
          description: 'Por favor, selecione um arquivo de áudio com menos de 4MB.',
        });
        e.target.value = ''; // Reset file input
        setFile(null);
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !instrument || !skillLevel) {
      toast({
        variant: 'destructive',
        title: 'Campos incompletos',
        description: 'Por favor, preencha todos os campos e selecione um arquivo de áudio.',
      });
      return;
    }

    setIsLoading(true);
    setGuidance('');

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const songDataUri = reader.result as string;
      try {
        const result = await generatePlayGuide({ songDataUri, instrument, userSkillLevel: skillLevel });
        setGuidance(result);
      } catch (err) {
        toast({
          variant: 'destructive',
          title: 'Erro na análise',
          description: 'Não foi possível gerar o guia. Tente novamente.',
        });
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
      toast({
        variant: 'destructive',
        title: 'Erro de leitura',
        description: 'Não foi possível ler o arquivo. Tente novamente.',
      });
      setIsLoading(false);
    };
  };

  return (
    <section id="ai-tool" className="w-full py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Guia de Execução Independente</h2>
          <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
            Use nossa IA para analisar uma música e receber um guia personalizado para tocá-la de ouvido.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-xl">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-primary" />
                Analisador de Músicas
              </CardTitle>
              <CardDescription>
                Envie um áudio, seu instrumento e nível para receber um guia passo a passo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="instrument">Seu Instrumento</Label>
                  <Input 
                    id="instrument" 
                    placeholder="Ex: Violão, Teclado, Saxofone" 
                    value={instrument}
                    onChange={(e) => setInstrument(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skillLevel">Nível de Habilidade</Label>
                  <Select value={skillLevel} onValueChange={setSkillLevel} required>
                    <SelectTrigger id="skillLevel">
                      <SelectValue placeholder="Selecione seu nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Iniciante">Iniciante</SelectItem>
                      <SelectItem value="Intermediário">Intermediário</SelectItem>
                      <SelectItem value="Avançado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="songFile">Arquivo de Áudio (MP3, WAV, etc. - máx 4MB)</Label>
                <Input id="songFile" type="file" accept="audio/*" onChange={handleFileChange} required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Music className="mr-2 h-4 w-4" />}
                {isLoading ? 'Analisando...' : 'Gerar Guia'}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {guidance && (
          <Card className="max-w-3xl mx-auto mt-8 shadow-lg animate-in fade-in-50 duration-500">
            <CardHeader>
              <CardTitle className="text-primary">Seu Guia Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none text-foreground whitespace-pre-wrap">
                {guidance}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
