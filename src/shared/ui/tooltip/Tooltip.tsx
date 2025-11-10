import { createPortal } from 'react-dom';
import styles from './Tooltip.module.css';
import { useState } from 'react';
import { ETooltipPosition } from './TooltipPosition';
import cx from 'classnames';
import { IPosition } from 'shared/model';

interface IProps {
    children: React.ReactNode;
    content: React.ReactNode | string;
    onClick?: () => void;
    position?: ETooltipPosition;
    theme: string;
}

export function Tooltip({
    children,
    content,
    onClick,
    position = ETooltipPosition.BOTTOM,
    theme,
}: IProps) {
    const [tooltipPosition, setTooltipPosition] = useState<IPosition>();
    const tooltipElement = document.querySelector('#tooltip-root');

    const getPosition = (positionData: DOMRect): IPosition => {
        const { x, y, width, height } = positionData;

        if (position === ETooltipPosition.LEFT) {
            return {
                top: `${y + height / 2}px`,
                left: `${x}px`,
            };
        }

        if (position === ETooltipPosition.RIGHT) {
            return {
                top: `${y + height / 2}px`,
                left: `${x + width}px`,
            };
        }

        if (position === ETooltipPosition.TOP) {
            return {
                top: `${y}px`,
                left: `${x + width / 2}px`,
            };
        }

        return {
            top: `${y + height}px`,
            left: `${x + width / 2}px`,
        };
    };

    const handleMouseEnter = (event: React.MouseEvent): void => {
        const parentElement = event.target;

        if (parentElement instanceof HTMLElement) {
            const positionData = parentElement.getBoundingClientRect();

            setTooltipPosition(getPosition(positionData));
        }
    };

    const handleMouseLeave = () => {
        setTooltipPosition(undefined);
    };

    return (
        <div
            className={styles.tooltipParent}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {tooltipPosition && tooltipElement
                ? createPortal(
                      <div
                          className={cx(
                              styles.tooltipContainer,
                              styles[position],
                              styles[`${theme}Tooltip`],
                          )}
                          onClick={onClick}
                          style={tooltipPosition}
                      >
                          <div>{content}</div>
                      </div>,
                      tooltipElement,
                  )
                : null}
        </div>
    );
}
