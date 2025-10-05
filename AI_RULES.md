# AI Rules for GitHub Dashboard Application

This document outlines the core technologies used in this project and provides guidelines for their usage to maintain consistency and best practices.

## Tech Stack

*   **Vite**: A fast build tool that provides an instant development server and optimized builds.
*   **React**: A JavaScript library for building user interfaces, used for all frontend components.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs directly in your markup.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **React Router**: A standard library for routing in React applications, managing navigation between different pages.
*   **Supabase**: An open-source Firebase alternative providing a PostgreSQL database, authentication, and real-time subscriptions.
*   **Tanstack Query (React Query)**: A powerful library for fetching, caching, and updating asynchronous data in React.
*   **Lucide React**: A collection of beautiful and customizable open-source icons.
*   **Sonner**: A modern toast library for displaying notifications.

## Library Usage Rules

To ensure a consistent and maintainable codebase, please adhere to the following guidelines when developing:

*   **React**: Use React for all UI development. Focus on creating functional components and leveraging React hooks for state and lifecycle management.
*   **TypeScript**: Always use TypeScript for new files and components. Ensure proper typing for props, state, and functions.
*   **Tailwind CSS**: All styling must be done using Tailwind CSS utility classes. Avoid writing custom CSS files or inline styles unless absolutely necessary for dynamic values.
*   **shadcn/ui**: Utilize shadcn/ui components for common UI elements (buttons, cards, forms, etc.). Do not modify the files within `src/components/ui` directly. If a component needs customization beyond its props, create a new component that wraps or extends the shadcn/ui component.
*   **React Router**: Manage all client-side routing using `react-router-dom`. Define routes primarily in `src/App.tsx`.
*   **Supabase**: For any backend interactions, including authentication, database queries, and real-time features, use the Supabase client provided in `src/integrations/supabase/client.ts`.
*   **Tanstack Query**: Use Tanstack Query for all data fetching and server state management. This includes fetching repositories, pull requests, and any other data from Supabase or external APIs.
*   **Lucide React**: Use icons from the `lucide-react` library.
*   **Sonner**: Use the `sonner` library for displaying user notifications (e.g., success messages, error alerts).
*   **File Structure**:
    *   Pages should reside in `src/pages/`.
    *   Reusable UI components should be in `src/components/`.
    *   Custom React hooks should be in `src/hooks/`.
    *   Utility functions should be in `src/lib/`.
    *   Third-party integrations (like Supabase client) should be in `src/integrations/`.
*   **Component Design**: Strive for small, focused, and reusable components. Components should ideally be less than 100 lines of code.
*   **New Files**: Always create a new file for every new component or hook, no matter how small. Never add new components to existing files.
*   **Responsiveness**: All designs must be responsive and adapt gracefully to different screen sizes using Tailwind CSS responsive utilities.