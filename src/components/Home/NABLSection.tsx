/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Electrotech', href: '#' },

    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl: '/images/clients/electrotech.png',

    author: {
      name: 'DOWNLOAD CERTIFICATE',
      href: '#'
    }
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Mechanical', href: '#' },

    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl: '/images/clients/mechanical.png',

    author: {
      name: 'DOWNLOAD CERTIFICATE',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Thermal', href: '#' },

    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl: '/images/clients/thermal.png',

    author: {
      name: 'DOWNLOAD CERTIFICATE',
      href: '#'
    }
  }
];

export default function NABLSection() {
  return (
    <div className="relative bg-gray-50   px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className=" max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col  overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-20 w-full object-contain" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white flex flex-col justify-between text-center">
                <div className="flex-1">
                  <p className="text-lg leading-snug  font-display mt-6 font-semibold text-gray-300">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                </div>
                <a
                  className="block w-full mt-6 py-3 px-5 text-center bg-white border-gray-200
                   border border-transparent font-display shadow-md leading-7 text-base text-pink-100 font-semibold hover:bg-gray-50 sm:inline-block sm:w-auto"
                  href={post.author.href}
                >
                  {post.author.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
