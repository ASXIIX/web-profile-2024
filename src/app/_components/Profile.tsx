import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-neutral-800 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/153346.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-50">Aom Suchawadee</h1>
        <p className="text-base text-slate-50">Computer Engineer</p>
      </div>

      <div className="py-10 text-center text-slate-50">"Fear kills more dreams than failure ever will."</div>
      <div className="p-6 mx-1 xl:mx-6 bg-white rounded-md">
        <p>
          <b>Age:</b> 21
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Phuket
        </p>
      </div>
    </div>
  );
};

export default Profile;
