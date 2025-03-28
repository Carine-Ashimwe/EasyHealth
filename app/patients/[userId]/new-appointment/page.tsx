import Image from "next/image";
import Link from "next/link";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#0A0A0A] p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-[#1E1E1E]/80 shadow-2xl backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <div className="cursor-pointer rounded-full bg-white/10 p-2">
                <Image
                  src="/assets/icons/easyh1.avif"
                  height={40}
                  width={40}
                  alt="EasyHealth Logo"
                  className="rounded-full"
                />
              </div>
            </Link>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-2xl font-bold tracking-tight text-white">
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

        <div className="border-t border-white/10 p-4 text-center text-sm text-gray-500">
          © 2025 EasyHealth
        </div>
      </div>
    </div>
  );
};

export default Appointment;
