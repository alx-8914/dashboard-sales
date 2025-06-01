import "./globals.css";
import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import DashboardCards from "@/components/DashboardCards";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <DashboardCards />

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview/>
        <Sales/>
      </section>
    </main>
  );
}