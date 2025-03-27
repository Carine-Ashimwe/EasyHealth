import Image from "next/image";
import Link from "next/link";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#0A0A0A] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#1E1E1E]/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <div className="bg-white/10 rounded-full p-2 cursor-pointer">
                <Image
                  src="/assets/icons/easyh1.avif"
                  height={40}
                  width={40}
                  alt="EasyHealth Logo"
                  className="rounded-full"
                />
              </div>
            </Link>
            <span className="text-white text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              EasyHealth
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
        </div>
        
        <div className="text-center text-gray-500 p-4 border-t border-white/10 text-sm">
          © 2025 EasyHealth
        </div>
      </div>
    </div>
  );
};

export default Appointment;
