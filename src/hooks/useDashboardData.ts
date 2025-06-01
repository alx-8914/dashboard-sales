'use client'

import { useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/api';

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
    salesByMonth: Array<{
      month: string;
      value: number;
    }>;
    salesByDevice: Record<string, SalesByDevice>;
  };
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchDashboardData();
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
} 