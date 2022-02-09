import { InstrumentCalibrationType } from '@components/libs/typeInterface';
import React from 'react';

interface IInstrumentsProps {
  features: InstrumentCalibrationType[];
}
// const features = [
//   {
//     name1: 'MULTIMETER'
//   },
//   {
//     name1: 'CLIP ON METER / CLAMP METER'
//   },
//   {
//     name1: 'INSULATTON TESTER (MEGGAR ) / EARTH TESTER'
//   },
//   {
//     name1: 'HV BREAK DOWN TESTER / OIL TEST KIT / HOLIDAY DETECTOR / SPARK TESTER'
//   },
//   {
//     name1: 'DECADE RESISTANCE BOX'
//   },
//   {
//     name1: 'PANEL METER VOLT/AMP'
//   },
//   {
//     name1: 'PANEL POWER / POWER FACTOR METER'
//   },
//   {
//     name1: 'mV/m AMP./ Ohms./ TH / RTD CALIBRATOR'
//   },
//   {
//     name1: 'FREQUENCY METER / COUNTER'
//   },
//   {
//     name1: 'TIMER / STOP WATCH'
//   },
//   {
//     name1: 'TIME INTERVAL METER'
//   },
//   {
//     name1: 'CIRCUIT BRAKER TIMMING KIT'
//   },

//   {
//     name1: 'TACHOMETER / RPM METER'
//   },
//   {
//     name1: 'SHUNT / CT'
//   },
//   {
//     name1: 'REGULATED POWER SUPPLY (Amp & Volt Ranges)'
//   },
//   {
//     name1: 'TRANSFORMER RATIO TESTER'
//   },
//   {
//     name1: 'OSCILLOSCOPE (CRO) – Voltage, Current & Frequency'
//   },
//   {
//     name1: 'POWER CLAMP METERS'
//   },
//   {
//     name1: 'POWER ANALYSER / LOAD ANALYSER'
//   },
//   {
//     name1: 'WELDING RECTIFIER / GENERATOR etc. (1000A AC, 500A DC)'
//   },
//   {
//     name1: 'MOTOR CHECKER (EMC Tester)'
//   },
//   {
//     name1: 'CAPACITANCE METER'
//   },
//   {
//     name1: 'LCR METER'
//   },

//   {
//     name1: 'CURRENT INJECTION (RELAY TEST) KIT'
//   },
//   {
//     name1: 'LOW RESISTANCE / WINDING RESISTANCE METER / MICROHM METER'
//   },
//   {
//     name1: 'HIGH RESISTANCE METER ( MILLION Mega Ohm Meter )'
//   },
//   {
//     name1: 'ENERGY METER'
//   },
//   {
//     name1: 'MULTIFUNCTION METERS'
//   },
//   {
//     name1: 'ELCB TESTER'
//   },
//   {
//     name1: 'OMICRON KIT'
//   },
//   {
//     name1: 'PROCESS INDICATORS / CONTROLLERS with Voltage / Amp. / Resistance Input'
//   },
//   {
//     name1: 'PROCESS CALIBRATOR CONTACT RESISTANCE METER ( CRM KIT )'
//   }
// ];
export default function InstrumentCalibration(props: IInstrumentsProps) {
  const { features } = props;
  return (
    <div className="py-3 xl:py-3 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="font-semibold text-customColors-900 text-2xl">Instruments we Calibrate</div>
        <div className="relative">
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-1 lg:gap-6">
              {/* <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none"> */}

              {/* <div className="prose prose-indigo text-gray-500 grid-cols-3 grid "> */}
              <div className="  text-customColors-800 text-sm gap-y-3 grid-cols-3 gap-x-6 grid ">
                {features.map((feature) => (
                  <div key={feature.name1} className="">
                    {/* <ul className="w-full list-inside ml-5"> */}
                    <ul className="list-disc">
                      <li>{feature.name1}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
