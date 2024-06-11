import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface Partner {
    id: number;
    name: string;
    title?: string;
    image: string;
}

interface InfiniteMovingCardsProps {
    items: Partner[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty('--animation-direction', 'forwards');
            } else {
                containerRef.current.style.setProperty('--animation-direction', 'reverse');
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty('--animation-duration', '20s');
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty('--animation-duration', '40s');
            } else {
                containerRef.current.style.setProperty('--animation-duration', '80s');
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((partner) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        style={{
                            background:
                                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                        }}
                        key={partner.id}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                {/* Display partner.name */}
                                {partner.name}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    {/* Display partner.title */}
                                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                        {partner.title}
                                    </span>
                                    {/* Display partner.image */}
                                    <img src={partner.image} alt={partner.name} className="w-10 h-10 rounded-full" />
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
