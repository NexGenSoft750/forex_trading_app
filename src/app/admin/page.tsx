"use client";

import DashboardOverview from '@/components/dashboard/DashboardOverview';
import DashbboardStats from '@/components/dashboard/DashbboardStats';

export default function DashboardPage() {
  return (
    <>
      <DashboardOverview />
      <DashbboardStats />
    </>
  );
}