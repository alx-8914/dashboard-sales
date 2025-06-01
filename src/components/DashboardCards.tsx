'use client'

import { useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/api';

interface SalesByMonth {
  month: string;
  value: number;
}

interface SalesByDevice {
  device: string;
  value: number;
}

interface DashboardData {
  cards: {
    totalSales: number;
    newClients: number;
    ordersToday: number;
    totalOrders: number;
  };
  recentClients: Array<{
    id: string;
    name: string;
    email: string;
  }>;
  charts: {
    salesByMonth: SalesByMonth[];
    salesByDevice: Record<string, SalesByDevice>;
  };
}

export default function DashboardCards() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchDashboardData();
        setDashboardData(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro ao carregar dados');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div className="p-4 text-center">Carregando dados...</div>;
  if (error) return <div className="p-4 text-red-500">Erro: {error}</div>;
  if (!dashboardData) return <div className="p-4 text-yellow-500">Nenhum dado disponível</div>;

  // Estrutura padrão caso algum campo esteja ausente
  const safeData: DashboardData = {
    cards: {
      totalSales: dashboardData.cards?.totalSales ?? 0,
      newClients: dashboardData.cards?.newClients ?? 0,
      ordersToday: dashboardData.cards?.ordersToday ?? 0,
      totalOrders: dashboardData.cards?.totalOrders ?? 0,
    },
    recentClients: dashboardData.recentClients ?? [],
    charts: {
      salesByMonth: dashboardData.charts?.salesByMonth ?? [],
      salesByDevice: dashboardData.charts?.salesByDevice ?? {},
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card Total de Vendas */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Total de Vendas (90 dias)</h3>
        <p className="text-2xl font-bold mt-2">
          R$ {safeData.cards.totalSales.toLocaleString('pt-BR')}
        </p>
      </div>

      {/* Renderizar outros cards de forma similar */}
    </div>
  );
}