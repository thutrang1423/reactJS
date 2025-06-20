import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 import chuẩn

function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
