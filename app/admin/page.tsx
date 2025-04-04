/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  let appointments;
  try {
    appointments = await getRecentAppointmentList();
  } catch (error) {
    return <div>Error loading appointments</div>;
  }

  // Safe check for undefined or null appointments
  if (!appointments) {
    return <div>Error loading appointments</div>;
  }

  // Safe check for scheduledCount, pendingCount, and cancelledCount
  const scheduledCount = appointments.scheduledCount || 0;
  const pendingCount = appointments.pendingCount || 0;
  const cancelledCount = appointments.cancelledCount || 0;
  const documents = appointments.documents || [];

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header flex items-center space-x-3">
        <Link href="/" className="flex cursor-pointer items-center space-x-2">
          <div className="rounded-full bg-white/10 p-2">
            <Image
              src="/assets/icons/easyh1.avif"
              height={40}
              width={40}
              alt="EasyHealth Logo"
              className="rounded-full"
            />
          </div>
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            EasyHealth
          </span>
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
        <section className="admin-stat flex space-x-4">
          <StatCard
            type="appointments"
            count={scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>
        <DataTable columns={columns} data={documents} />
      </main>
    </div>
  );
};

export default AdminPage;
