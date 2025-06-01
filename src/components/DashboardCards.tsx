import { useDashboardData } from '../hooks/useDashboardData';

export default function DashboardCards() {
  const { data, loading, error } = useDashboardData();

  if (loading) return <div className="loading">Carregando dados...</div>;
  if (error) return <div className="error">Erro: {error}</div>;
  if (!data) return null;

  return (
    <div className="dashboard-grid">
      {/* Card Total de Vendas */}
      <div className="card">
        <h3>Total de Vendas (90 dias)</h3>
        <p>R$ {data.cards.totalSales.toLocaleString('pt-BR')}</p>
      </div>

      {/* Card Novos Clientes */}
      <div className="card">
        <h3>Novos Clientes (30 dias)</h3>
        <p>{data.cards.newClients}</p>
      </div>

      {/* Card Pedidos Hoje */}
      <div className="card">
        <h3>Pedidos Hoje</h3>
        <p>{data.cards.ordersToday}</p>
      </div>

      {/* Card Total de Pedidos */}
      <div className="card">
        <h3>Total de Pedidos</h3>
        <p>{data.cards.totalOrders}</p>
      </div>

      {/* Lista de Clientes Recentes */}
      <div className="card recent-clients">
        <h3>Clientes Recentes</h3>
        <ul>
          {data.recentClients.map((client) => (
            <li key={client.id}>
              <strong>{client.name}</strong>
              <span>{client.email}</span>
              <small>{new Date(client.createdAt).toLocaleDateString('pt-BR')}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 