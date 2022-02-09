import { TableContainerType } from '@components/libs/typeInterface';
import React from 'react';

interface ITableContainerProps {
  people: TableContainerType[];
}

const people = [
  {
    no: '1',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'BEVEL PROTRACTOR L.C. 5 Minutes of Arc',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'to 0° – 90° – 0°',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '3.13 min of arc',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ANGLE GAUGE BLOCK SET'
  },
  {
    no: '2',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'BORE GAUGE (2-POINT,TRANSMISSION ACCURACY ONLY)',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'up to 2 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: 'up to 2 mm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING DIAL GAUGE TESTER'
  }
];

export default function TableContainer(props: ITableContainerProps) {
  const { people } = props;
  return (
    <section className={`w-full flex justify-start items-center flex-wrap `}>
      <div className="w-full flex items-center justify-between xs:px-0 lg:px-0 lg:my-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          {/* <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Case Study
          </p> */}
          <p className="font-semibold text-customColors-900 text-2xl">
            {/* {name} Case Studies */}
            Our Calibration Scope
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
      <div className="w-full  items-center justify-between  lg:my-5 lg:container lg:mx-auto border border-customColors-1100">
        {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> */}
        <div className="">
          <div className="align-middle inline-block min-w-full">
            <div className=" overflow-hidden ">
              <table className="min-w-full divide-y  divide-customColors-1100">
                <thead className="bg-customBackground-800">
                  <tr className="divide-x  align-top divide-customColors-1100">
                    <th
                      scope="col"
                      className="px-3 py-3  top-0 inset-0 text-left text-sm font-bold text-customColors-800 uppercase tracking-wider"
                    >
                      SR NO
                    </th>
                    <th
                      scope="col"
                      className="px-1 items-start  top-0 inset-0 py-3 text-left text-sm font-bold text-customColors-800 uppercase tracking-wider"
                    >
                      DISCIPLINE / GROUP
                    </th>
                    <th
                      scope="col"
                      className="px-1  break-words w-24 py-3 text-left text-sm font-bold text-customColors-800 uppercase tracking-wider"
                    >
                      MEASURAND OR REFERENCE MATERIAL/TYPE OF INSTRUMENT OR MATERIAL TO BE
                      CALIBRATED OR MEASURED / QUANTITY MEASURED / INSTRUMENT
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-sm font-bold text-customColors-800 uppercase tracking-wider"
                    >
                      MEASUREMENT RANGE AND ADDITIONAL PARAMETERS WHERE APPLICABLE(RANGE AND
                      FREQUENCY)
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-sm font-bold text-customColors-800 uppercase tracking-wider"
                    >
                      CALIBRATION AND MEASUREMENT CAPABILITY(CMC)(±)
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-sm font-bold text-customColors-800 uppercase tracking-wider"
                    >
                      CALIBRATION OR MEASUREMENT METHOD OR PROCEDURE)
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white align-top divide-y divide-customColors-1100">
                  {people.map((person, personIdx) => (
                    <tr
                      className={
                        personIdx % 2 === 0
                          ? 'bg-white divide-x divide-customColors-1100'
                          : 'bg-customBackground-800 divide-x divide-customColors-1100'
                      }
                    >
                      <td className="ml-3 pb-1 w-12  whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-green-100 text-customColors-800">
                          {person.no}
                        </span>
                      </td>
                      <td className="p-2  w-52">
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-sm font-normal text-customColors-800">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 w-52 break-words">
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-sm font-normal text-customColors-800">
                              <tr>
                                <td>{person.title}</td>
                              </tr>
                              <tr>
                                <td>{person.title2}</td>
                              </tr>
                              <tr>
                                <td>{person.title3}</td>
                              </tr>
                              <tr>
                                <td>{person.title4}</td>
                              </tr>
                              <tr>
                                <td>{person.title5}</td>
                              </tr>
                              <tr>
                                <td>{person.title6}</td>
                              </tr>
                              <tr>
                                <td>{person.title7}</td>
                              </tr>
                              <tr>
                                <td>{person.title8}</td>
                              </tr>
                              <tr>
                                <td>{person.title9}</td>
                              </tr>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="px-1 py-4 w-24 break-words whitespace-nowrap text-sm text-gray-500">
                      
                        <tr>
                          <td>{person.title}</td>
                        </tr>
                        <tr>
                          <td>{person.title2}</td>
                        </tr>
                        <tr>
                          <td>{person.title3}</td>
                        </tr>
                        <tr>
                          <td>{person.title4}</td>
                        </tr>
                        <tr>
                          <td>{person.title5}</td>
                        </tr>
                        <tr>
                          <td>{person.title6}</td>
                        </tr>
                        <tr>
                          <td>{person.title7}</td>
                        </tr>
                        <tr>
                          <td>{person.title8}</td>
                        </tr>
                        <tr>
                          <td>{person.title9}</td>
                        </tr>
                      </td> */}
                      <td className="p-2 w-52 whitespace-nowrap text-sm font-normal text-customColors-800">
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
                        <tr>
                          <td>{person.range6}</td>
                        </tr>
                        <tr>
                          <td>{person.range7}</td>
                        </tr>
                        <tr>
                          <td>{person.range8}</td>
                        </tr>
                        <tr>
                          <td>{person.range9}</td>
                        </tr>
                      </td>
                      <td className="p-2 w-52  whitespace-nowrap font-normal text-sm text-customColors-800">
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
                        <tr>
                          <td>{person.role6}</td>
                        </tr>
                        <tr>
                          <td>{person.role7}</td>
                        </tr>
                        <tr>
                          <td>{person.role8}</td>
                        </tr>
                        <tr>
                          <td>{person.role9}</td>
                        </tr>
                      </td>
                      <td className="p-2 w-52">
                        <div className="text-sm font-normal text-customColors-800">
                          {person.method}
                        </div>
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
