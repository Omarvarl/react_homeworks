import { createPortal } from 'react-dom';
import { ConfirmDialog } from './ConfirmDialog.tsx';
import { useCallback, useState } from 'react';
import { TConfirmDialog } from 'shared/model/index.js';

export function useConfirmDialog() {
    const [content, setContent] = useState<TConfirmDialog>();
    const [isVisible, toggleVisibility] = useState(false);
    const [resolvePromise, setResolvePromise] =
        useState<(value: boolean) => void>();

    const showConfirmDialog = useCallback(
        (contentData: TConfirmDialog): Promise<boolean> => {
            return new Promise<boolean>((resolve) => {
                setContent(contentData);
                toggleVisibility(true);
                setResolvePromise(() => resolve);
            });
        },
        [],
    );

    const handleClose = () => {
        toggleVisibility(false);
        resolvePromise?.(false);
        setResolvePromise(undefined);
    };

    const handleConfirm = () => {
        toggleVisibility(false);
        resolvePromise?.(true);
        setResolvePromise(undefined);
    };
    const modalElement = document.querySelector('#modal-root');
    const ConfirmDialogElement =
        modalElement && content
            ? createPortal(
                  <ConfirmDialog
                      content={content}
                      isVisible={isVisible}
                      onConfirm={handleConfirm}
                      onCancel={handleClose}
                  />,
                  modalElement,
              )
            : null;

    return {
        ConfirmDialogElement,
        showConfirmDialog,
    };
}
