import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  return (
    <div className="flex flex-col items-center justify-center p-4 lg:w-[50rem] text-white m-auto">
      <h2 className="mt-10 font-bold text-4xl text-gb-25 text-center">
        Dúvidas Frequentes
      </h2>

      <Accordion type="single" collapsible className="w-full mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Quanto tempo leva para ver resultados?
          </AccordionTrigger>
          <AccordionContent>
            Isso varia de pessoa para pessoa, mas a maioria dos clientes começa
            a ver resultados visíveis após algumas semanas de treinamento
            consistente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Qual prazo de entrega?</AccordionTrigger>
          <AccordionContent>
            Após a confirmação de pagamento, entrarei em contato para agendar a
            anamnese via video chamada. Sua prescrição será enviada em até 48h.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Em caso de dúvidas com quem eu falo?
          </AccordionTrigger>
          <AccordionContent>
            Você terá acesso ao meu WhatsApp pessoal para tirar quaisquer
            dúvidas sobre o treino.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
