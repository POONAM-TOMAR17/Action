/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';
const features = [
  {
    name: 'MULTIMETER',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.'
  },
  {
    name: 'TACHOMETER / RPM METER',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.'
  },
  {
    name: 'CURRENT INJECTION (RELAY TEST) KIT',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.'
  },
  {
    name: 'CLIP ON METER / CLAMP METER',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.'
  },
  {
    name: 'SHUNT / CT',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.'
  },
  {
    name: 'LOW RESISTANCE / WINDING RESISTANCE METER / MICROHM METER',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.'
  },
  {
    name: 'INSULATTON TESTER (MEGGAR ) / EARTH TESTER',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.'
  },
  {
    name: 'REGULATED POWER SUPPLY (Amp & Volt Ranges)',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.'
  }
];

export default function InstrumentCalibration() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <dl className=" sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-1 sm:gap-y-1 lg:grid-cols-3 lg:gap-x-1">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <ul className="w-full list-inside list-disc ml-5">
                <li>{feature.name}</li>
                {/* <li>jii</li> */}
              </ul>
              {/* <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-md leading-6 font-normal text-gray-900">{feature.name}</p>
              </dt> */}
              {/* <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd> */}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
