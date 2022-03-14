import React from "react";

const PorqueFinanciarseConCroi = () =>{
    const features = [
        {
          name: 'Motivo 1',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'Motivo 2',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'Motivo 3',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'Motivo 4',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'Motivo 5',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
        {
          name: 'Motivo 6',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          
        },
      ]
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          
          <p className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black text-center">
            Por que financiarse con CROI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <br></br>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
            </p>
        <br></br>
        <br></br>
      </div>
    );
};

export default PorqueFinanciarseConCroi;