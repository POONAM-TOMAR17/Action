import { TableContainerType } from '@components/libs/typeInterface';
import React from 'react';

interface ITableContainerProps {
  people: TableContainerType[];
}

const people = [
  {
    no: '1',
    name: 'MECHANICAL TORQUE MEASURING DEVICES',
    title: 'TORQUE WRENCH (Type I- Class B & C / Type II – Class A & B)',
    range1: '2 Nm to 20 Nm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '2.49 % ',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method:
      'USING DIGITAL TORQUE CALIBRATION SYSTEM WITH TRANSDUCERS,BASED ON ISO 6789-2:2017 IN CLOCKWISE DIRECTION ONLY.'
  },
  {
    no: '2',
    name: 'MECHANICAL TORQUE MEASURING DEVICES',
    title: ' TORQUE WRENCH (Type I- Class B & C / Type II – Class A & B)',
    range1: '20 Nm to 200 Nm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.56 % ',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method:
      'USING DIGITAL TORQUE CALIBRATION SYSTEM WITH TRANSDUCERS,BASED ON ISO 6789-2:2017 IN CLOCKWISE DIRECTION ONLY.'
  },
  {
    no: '3',
    name: 'MECHANICAL TORQUE MEASURING DEVICES',
    title: 'TORQUE WRENCH (Type I- Class B & C / Type II – Class A & B)',

    range1: '200 Nm to 2000 Nm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.03 % ',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method:
      'USING DIGITAL TORQUE CALIBRATION SYSTEM WITH TRANSDUCERS,BASED ON ISO 6789-2:2017 IN CLOCKWISE DIRECTION ONLY.'
  }
];

export default function TableContainer(props: ITableContainerProps) {
  const { people } = props;
  return (
    <section className={`w-full flex justify-start items-center flex-wrap `}>
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 lg:my-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          {/* <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Case Study
          </p> */}
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            {/* {name} Case Studies */}
            Our Calibration scope
          </p>
        </div>
        {/* <div className="xs:hidden lg:flex-1 lg:flex justify-end items-start">
          <a
            href="/insights"
            className="flex items-center justify-center border border-buttonColor text-buttonColor px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-buttonColor hover:text-white cs-readmore"
          >
            View All
            <ButtonArrow className="ml-3" />
          </a>
        </div> */}
      </div>
      {/* <div className="max-w-7xl mb-20 mx-auto border flex flex-col"> */}
      <div className="w-full  items-center justify-between  lg:my-5 lg:container lg:mx-auto border">
        {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> */}
        <div className="">
          <div className="align-middle inline-block min-w-full">
            <div className=" overflow-hidden ">
              <table className="min-w-full divide-y  divide-gray-200">
                <thead className="bg-customBackground-800">
                  <tr className="divide-x">
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SR NO
                    </th>
                    <th
                      scope="col"
                      className="px-1 w-52 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DISCIPLINE / GROUP
                    </th>
                    <th
                      scope="col"
                      className="px-1 w-52 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MEASURAND OR REFERENCE MATERIAL/TYPE OF INSTRUMENT OR MATERIAL TO BE
                      CALIBRATED OR MEASURED / QUANTITY MEASURED / INSTRUMENT
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MEASUREMENT RANGE AND ADDITIONAL PARAMETERS WHERE APPLICABLE(RANGE AND
                      FREQUENCY)
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CALIBRATION AND MEASUREMENT CAPABILITY(CMC)(±)
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CALIBRATION OR MEASUREMENT METHOD OR PROCEDURE)
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person, personIdx) => (
                    <tr
                      className={
                        personIdx % 2 === 0
                          ? 'bg-white divide-x'
                          : 'bg-customBackground-800 divide-x'
                      }
                    >
                      <td className="px-3 w-12 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {person.no}
                        </span>
                      </td>
                      <td className="ml-3 pb-1 w-52">
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="ml-3 pb-1 w-52">
                        <div className="text-sm text-gray-900">{person.title}</div>
                      </td>
                      <td className="px-1 py-4 w-52 whitespace-nowrap text-sm text-gray-500">
                        <tr>
                          <td>{person.range1}</td>
                        </tr>
                        <tr>
                          <td>{person.range2}</td>
                        </tr>
                        <tr>
                          <td>{person.range3}</td>
                        </tr>
                        <tr>
                          <td>{person.range4}</td>
                        </tr>
                        <tr>
                          <td>{person.range5}</td>
                        </tr>
                      </td>
                      <td className="px-1 py-4 w-52 whitespace-nowrap text-sm text-gray-500">
                        <tr>
                          <td>{person.role1}</td>
                        </tr>
                        <tr>
                          <td>{person.role2}</td>
                        </tr>
                        <tr>
                          <td>{person.role3}</td>
                        </tr>
                        <tr>
                          <td>{person.role4}</td>
                        </tr>
                        <tr>
                          <td>{person.role5}</td>
                        </tr>
                      </td>
                      <td className="ml-3 pb-1 w-52">
                        <div className="text-sm text-gray-900">{person.method}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
