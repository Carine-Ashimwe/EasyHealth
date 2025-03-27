/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen items-center justify-center bg-[#020617] p-4">
      {isAdmin && <PasskeyModal />}
      <div className="w-full max-w-md rounded-xl border border-[#334155]/50 bg-[#1e293b]/30 p-8 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <div className="mb-6 flex items-center justify-center space-x-1">
            <Image
              src="/assets/icons/easyh1.avif"
              height={30}
              width={30}
              alt="patient"
              className="mr-1 size-12 rounded-full object-cover"
            />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-2xl font-bold leading-none tracking-tight text-transparent text-white">
              EasyHealth
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-semibold text-white">
            Hi there 👋
          </h1>
          <p className="text-gray-400">Get started with appointments.</p>
        </div>

        <PatientForm />

        <div className="text-14-regular mt-6 flex justify-between text-gray-400">
          <p>© 2025 EasyHealth</p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
