/* eslint-disable no-console */
import { Button, Container, Typography } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';

export function WebSocketLogger() {
    const socketRef = useRef<WebSocket>(null);

    const handleMessage = useCallback((event: MessageEvent): void => {
        console.log('WebSocket message received:', event.data);
    }, []);

    const handleClose = useCallback((): void => {
        socketRef.current?.removeEventListener('message', handleMessage);
        socketRef.current?.close();
    }, [handleMessage]);

    useEffect(() => {
        socketRef.current = new WebSocket(
            'wss://stream.binance.com:9443/ws/btcusdt@trade',
        );

        socketRef.current?.addEventListener('message', handleMessage);

        return () => {
            handleClose();
        };
    }, [handleMessage, handleClose]);

    return (
        <Container>
            <Typography variant="h6" sx={{ mb: 2 }}>
                WebSocketLogger
            </Typography>

            <Button
                sx={{ mb: 2 }}
                variant="outlined"
                type="button"
                onClick={handleClose}
            >
                Закрыть сокет
            </Button>
        </Container>
    );
}
