"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export default function ScrollReveal({ children, className = "", style }: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setIsVisible(true);
                observer.unobserve(element);
            },
            { threshold: 0.15 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            style={style}
            className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}