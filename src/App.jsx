import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { DesignGallery, Main } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/design"
                    element={<DesignGallery />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
