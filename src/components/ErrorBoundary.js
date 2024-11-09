import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log the error to an error reporting service if needed
        console.error("ErrorBoundary caught an error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            // Customize the fallback UI as needed
            return (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h2>Oops! Something went wrong.</h2>
                    <p>We're working to fix this issue. Please try refreshing the page or come back later.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
