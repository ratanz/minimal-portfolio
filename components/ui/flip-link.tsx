import React from 'react'
import { motion } from 'framer-motion'

// Animation constants
const DURATION = 0.25
const STAGGER = 0.025

// FlipLink component props interface
interface FlipLinkProps {
    children: string
    href: string
    className?: string
    target?: string
    rel?: string
}

/**
 * FlipLink Component
 * 
 * A smooth letter-by-letter flip animation component for navigation links.
 * On hover, each letter flips upward with a staggered effect, creating
 * a premium and eye-catching animation.
 * 
 * @param children - The text to display and animate (must be a string)
 * @param href - The URL the link points to
 * @param className - Optional CSS classes for styling
 * @param target - Optional link target (e.g., "_blank")
 * @param rel - Optional link relationship (e.g., "noopener noreferrer")
 */
export const FlipLink = ({ children, href, className = '', target, rel }: FlipLinkProps) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            target={target}
            rel={rel}
            className={`relative block overflow-hidden whitespace-nowrap ${className}`}
            style={{
                lineHeight: 1,
            }}
        >
            <div>
                {children.split("").map((l: string, i: number) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l: string, i: number) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    )
}
