import React from 'react';
import { solutionsArray } from '../../components/constants';
import { SolutionsType } from '../../components/libs/typeInterface';
const people = [
  {
    name: 'Electrical',
    role: 'Electrical Calibration, also called electronic calibration, ensures that electronic devices are performing properly and conform to manufacturers’ standards.',
    imageUrl:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://wordpress.actionengineers.com/wp-content/uploads/2021/06/Electrical.jpg',
    read: 'READ MORE'
  },
  {
    name: 'Dimension',
    role: 'Dimensional calibration services, including Tool Calibration and Gauge Calibration Services, are performed to evaluate and adjust instruments in order to maintain accurate measurement.',
    imageUrl:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://wordpress.actionengineers.com/wp-content/uploads/2021/06/Dimension.jpg',
    read: 'READ MORE'
  },
  {
    name: 'Temperature',
    role: 'Temperature Calibration of ovens, furnaces and temperature measuring instruments helps ensure that accurate temperatures are maintained and displayed on readouts.',
    imageUrl:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://wordpress.actionengineers.com/wp-content/uploads/2021/06/Temprature.jpg',
    read: 'READ MORE'
  },
  {
    name: 'Pressure',
    role: 'Pressure Calibration compares the output of a device used to measure and display pressure with that of a pressure measurement standard.',
    imageUrl:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://wordpress.actionengineers.com/wp-content/uploads/2021/06/Pressure.jpg',
    read: 'READ MORE'
  },
  {
    name: 'Torque',
    role: 'Routine Torque Calibration ensures repeatable accuracy from instruments used to apply torque during production processes.',
    imageUrl:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://wordpress.actionengineers.com/wp-content/uploads/2021/06/Torque.jpg',
    read: 'READ MORE'
  },
  {
    name: 'Mass & Weight',
    role: 'During Mass Calibration, the test weights derived from the calibrated items are compared to specified measurement standards.',
    imageUrl:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://wordpress.actionengineers.com/wp-content/uploads/2021/06/Torque.jpg',
    read: 'READ MORE'
  }
];
const Solutions2 = () => {
  return (
    <div className="bg-customBackground-300">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          {/* <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec
              risus sodales. Tempus quis et.
            </p>
          </div> */}
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg "
                      src={person.imageUrl}
                      alt=""
                      style={{ width: '350px', height: '205px' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-4">
                      <h3>{person.name}</h3>
                      <p className="text-customColors-800 font-normal text-base">{person.role}</p>
                    </div>
                    <div role="list" className="flex space-x-5 text-red-600 font-semibold">
                      <h3>{person.read}</h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solutions2;
