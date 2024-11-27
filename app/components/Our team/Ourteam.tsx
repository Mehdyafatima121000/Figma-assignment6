import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const teamMembers = [
  { img: '/Image.svg', name: 'James Nduku', des: 'Marketing Coordinator' },
  { img: '/pfp1.svg', name: 'Joseph Muyannmbu', des: 'Nursing Assisstant' },
  { img: '/pfp2.svg', name: 'Joseph Ngumbau', des: 'Medical Assisstant' },
  { img: '/pfp3.svg', name: 'Eric Kipkemboi', des: 'Web Designer' },
  { img: '/pfp4.svg', name: 'Stephen Kerubo', des: 'President of Sales' },
  { img: '/pfp5.svg', name: 'John Lebo', des: 'Dog Trainer' },
];

function OurTeam() {
  return (
    <>
      <div className="w-full mt-16 bg-[#F7F7F7]" id="aboutus">
        <h2 className="font-bold text-center mt-16 p-4 text-4xl text-black">Our Team</h2>
        <p className="text-base mt-4 text-center text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {teamMembers.map((team, index) => (
            <div key={index} className="bg-white p-6 text-center rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                width={80}
                height={80}
                src={team.img}
                alt={team.name}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-black">{team.name}</h3>
              <p className="text-sm text-gray-600">{team.des}</p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <Link href="/">
                  <Image width={24} height={24} src="/LinkedIn.svg" alt="LinkedIn link" />
                </Link>
                <Link href="/">
                  <Image width={24} height={24} src="/Twitter.svg" alt="Twitter link" />
                </Link>
                <Link href="/">
                  <Image width={24} height={24} src="/web.svg" alt="Web link" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurTeam;
