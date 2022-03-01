import React from "react";

const PorqueInvertir = () =>{
    const callouts = [
        {
          name: 'Motivo 1',
          description: 'Este es la descripcion del motivo 1',
          imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Motivo 2',
          description: 'Este es la descripcion del motivo 2',
          imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: 'Motivo 3',
          description: 'Este es la descripcion del motivo 3',
          imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
        {
            name: 'Motivo 4',
            description: 'Este es la descripcion del motivo 4',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
          },
          {
            name: 'Motivo 5',
            description: 'Este es la descripcion del motivo 5',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
          },
          {
            name: 'Motivo 6',
            description: 'Este es la descripcion del motivo 6',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
          },
      ];
    return(
        <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black text-center">Por que Invertir en CROI</h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                        src={callout.imageSrc}
                        className="w-full h-full object-center object-cover"
                    />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                    <a >
                        <span className="absolute inset-0" />
                        {callout.name}
                    </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                    <br></br>
                    <br></br>
                </div>
                ))}
            </div>
            </div>
        </div>
      </div>
    );
};

export default PorqueInvertir;