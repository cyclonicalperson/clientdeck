import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClientList from './components/ClientList';
import ProjectList from './components/ProjectList';
import TimeTracker from './components/TimeTracker';
import InvoiceList from './components/InvoiceList';
import Insights from './components/Insights';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <header className="bg-blue-700 text-white sticky top-0 z-10 shadow-lg">
                    <div className="container mx-auto px-4 py-3">
                        <h1 className="text-2xl font-bold tracking-tight">ClientDeck</h1>
                        <nav className="mt-3 flex space-x-6 text-sm font-medium">
                            <Link to="/" className="nav-link">Clients</Link>
                            <Link to="/projects" className="nav-link">Projects</Link>
                            <Link to="/time" className="nav-link">Time Tracking</Link>
                            <Link to="/invoices" className="nav-link">Invoices</Link>
                            <Link to="/insights" className="nav-link">Insights</Link>
                        </nav>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-6">
                    <Routes>
                        <Route path="/" element={<ClientList />} />
                        <Route path="/projects" element={<ProjectList />} />
                        <Route path="/time" element={<TimeTracker />} />
                        <Route path="/invoices" element={<InvoiceList />} />
                        <Route path="/insights" element={<Insights />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;