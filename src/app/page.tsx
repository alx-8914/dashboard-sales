import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./globals.css";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";
import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h4"/>
            </div>
            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h4"/>
            </div>
            <CardDescription>
              Novos Clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">234</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
                Pedidos Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h4"/>
            </div>
            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
                Total de Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h4"/>
            </div>
            <CardDescription>
              Total Pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">2300</p>
          </CardContent>
        </Card>
         
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview/>
        <Sales/>
      </section>
    </main>
  );
}