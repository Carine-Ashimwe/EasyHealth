import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/assets/icons/easyh1.avif"
                height={40}
                width={40}
                alt="EasyHealth Logo"
                className="cursor-pointer rounded-full"
              />
            </Link>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-2xl font-bold tracking-tight text-white">
              EasyHealth
            </span>
          </div>

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2025 EasyHealth</p>
        </div>
      </section>
    </div>
  );
};

export default Register;
