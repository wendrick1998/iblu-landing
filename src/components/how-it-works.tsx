export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Chame no WhatsApp",
      description: "Clique no botão e inicie uma conversa com a gente.",
    },
    {
      number: "2",
      title: "Receba os modelos",
      description: "Enviamos os modelos disponíveis com detalhes.",
    },
    {
      number: "3",
      title: "Tire suas dúvidas",
      description: "Respondemos tudo, sem pressa e sem compromisso.",
    },
    {
      number: "4",
      title: "Compra segura",
      description: "Finalizamos a compra com total segurança.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Como funciona a compra
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5F8A] to-[#0D3B5E] text-white shadow-lg shadow-[#1E5F8A]/20">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Todo o atendimento e finalização são feitos diretamente pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
