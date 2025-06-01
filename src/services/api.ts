import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

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

interface ApiResponse {
  data: DashboardData;
}

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const fetchDashboardData = async (): Promise<ApiResponse> => {
  try {
    const response = await api.get<{ data: ApiResponse }>('/api/dashboard');
    const defaultData: DashboardData = {
      cards: {
        totalSales: 0,
        newClients: 0,
        ordersToday: 0,
        totalOrders: 0
      },
      recentClients: [],
      charts: {
        salesByMonth: [],
        salesByDevice: {}
      }
    };

    return {
      data: response.data.data?.data || defaultData
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};