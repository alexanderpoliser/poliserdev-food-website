import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

const formSchema = z.object({
  name: z.string().min(2, "O nome deve conter pelo menos 2 caracteres"),
  email: z.string().email("Endereço de email inválido"),
  subject: z.string().min(5, "O assunto deve conter pelo menos 5 caracteres"),
  message: z.string().min(10, "A mensagem deve conter pelo mneos 10 caracteres"),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Mensagem enviada!",
      description: "Retornaremos a sua mensagem o mais breve possível",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contate-nos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Precisa de assistência? Nossa equipe está pronta para ajudar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Insira seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Insira o endereço de email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Insira um assunto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Enviar
              </Button>
            </form>
          </Form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h3 className="font-semibold text-lg">Ligue-nos:</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-red-700">+1-234-567-8900</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h3 className="font-semibold text-lg">Horários de funcionamento:</h3>
              <div className="text-muted-foreground">
                <p>Seg-Sex: 11:00am - 20:00pm</p>
                <p>Sáb, Dom: 9:00am - 22:00pm</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h3 className="font-semibold text-lg">Localização:</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <div>
                  <p>Av. Paulista, 1234 - Bela Vista </p>
                  <p>São Paulo - SP, 1234-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;