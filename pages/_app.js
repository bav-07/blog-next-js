// to load GLOBAL CSS into application
import '../styles/globals.css';

// This is a top-level React component that wraps all the pages in the application.
// It can be used to keep state when navigating between pages
// And it can be used to add global styles (via CSS)
// When pages/_app.js is added, the server must be restarted with ctrl+c and `npm run dev`

export default function App({ Component, pageProps }) {
    return <Component {...pageProps}/>;
}