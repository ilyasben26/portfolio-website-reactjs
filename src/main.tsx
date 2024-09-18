import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TranslationProvider } from './contexts/TranslationContext.tsx'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import PostHogPageviewTracker from "./PostHogPageviewTracker";

posthog.init('phc_7OlSGa6RV9lal89f0x9bWU7Nr3o5Dita4FTZjWTMFZO',
  {
    api_host: 'https://us.i.posthog.com',
    capture_pageview: false,
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <TranslationProvider>
        <BrowserRouter>
          <PostHogPageviewTracker />
          <App />
        </BrowserRouter>
      </TranslationProvider>
    </PostHogProvider>
  </StrictMode>
)
