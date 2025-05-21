import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DesignGallery, Main } from './pages';
import WorksPage from './pages/works';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/design" element={<DesignGallery />} />
                <Route path="/works/:name" element={<WorksPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
