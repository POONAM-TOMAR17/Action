/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

const posts = [
  {
    title: 'James M. Beck',
    href: '#',
    category: { name: 'Electrotech', href: '#' },
    designation: 'Construction Manager',
    description:
      'Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at commodo erat, fringilla egestas tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    imageUrl: '/images/clients/electrotech.png',
    author: {
      name: '',
      href: ''
    }
  },
  {
    title: 'Scooter Libby',
    href: '#',
    category: { name: 'Mechanical', href: '#' },
    designation: 'Project Manager',
    description:
      'Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at commodo erat, fringilla egestas tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    imageUrl: '/images/clients/mechanical.png',
    author: {
      name: '',
      href: ''
    }
  },
  {
    title: 'Evan Chesler',
    href: '#',
    category: { name: 'Thermal', href: '#' },
    designation: 'Construction Manager',
    description:
      'Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at commodo erat, fringilla egestas tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    imageUrl: '/images/clients/thermal.png',

    author: {
      name: '',
      href: ''
    }
  },
  {
    title: 'David Boies',
    href: '#',
    category: { name: 'Thermal', href: '#' },
    designation: 'Building Worker',
    description:
      'Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at commodo erat, fringilla egestas tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    imageUrl: '/images/clients/thermal.png',

    author: {
      name: '',
      href: ''
    }
  },
  {
    title: 'Mark Geragos',
    href: '#',
    category: { name: 'Thermal', href: '#' },
    designation: 'Construction Manager',
    description:
      'Donec a felis sed ligula aliquet sollicitudin a in elit. Nunc at commodo erat, fringilla egestas tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    imageUrl: '/images/clients/thermal.png',

    author: {
      name: '',
      href: ''
    }
  },
  {
    title: 'Work With Us?',
    href: '#',
    category: { name: 'Thermal', href: '#' },
    designation: '',
    description: 'Donec a felis sed ligula aliquet tortor. .',
    imageUrl: '/images/clients/thermal.png',
    author: {
      name: 'Join Our Team',
      href: '#'
    }
  }
];

export default function OurTeamSection() {
  return (
    <div className="relative bg-gray-50   px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
      {/* <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div> */}
      <div className="w-full flex items-center justify-start xs:px-4 lg:px-8 lg:container lg:mx-auto">
        <div className=" max-w-lg mx-auto grid gap-10 gap-y-40 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post, index) => (
            <div key={post.title} className="gap-y-3 flex flex-col  overflow-hidden">
              <p className="font-montserrat text-customColors-900 font-extrabold text-xl">
                {post.title}
              </p>
              <p className="font-ptsans text-sm text-customColors-800 ">
                <i>{post.designation}</i>
              </p>
              <p className="font-ptsans text-sm text-customColors-800">{post.description}</p>
              {posts.length - 1 === index && (
                <a
                  className="block w-1/2 sm:w-1/2  py-1 px-5 text-left bg-customColors-700 border-gray-200 border border-transparent font-montserrat shadow-md leading-7 text-base  text-white font-normal hover:bg-gray-50 sm:inline-block "
                  href={post.author.href}
                >
                  {post.author.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
