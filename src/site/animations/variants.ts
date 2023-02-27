import { GlobalTypes } from './../globals/index';

export interface VariantTypes extends GlobalTypes {
    variants?: any | undefined,
    delay?: number,
    damping?: number,
}

export const Variants = {
    fadeInView: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        transition: { duration: 1, ease: "easeInOut" }
    },
    fadeInFromLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        transition: { duration: 1, ease: "easeInOut" }
    },
    fadeInFromRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        transition: { duration: 1, ease: "easeInOut" }
    },
    slideInFromLeft: {
        hidden: { x: -100 },
        visible: { x: 0 },
        transition: { duration: 1, ease: "easeInOut" }
    },
    slideInFromRight: {
        hidden: { x: 100 },
        visible: { x: 0 },
    },
    rotateIn: {
        hidden: { opacity: 0, rotate: -180 },
        visible: { opacity: 1, rotate: 0 },
        transition: { duration: 1, ease: "easeInOut" }
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
        transition: { duration: 1, ease: "easeInOut" }
    },
    shake: {
        visible: {
            x: [-10, 10, -10, 10, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeInOut" },
    },
    pulse: {
        hidden: { scale: 0.5 },
        visible: { scale: 1 },
        transition: { repeat: Infinity, duration: 1, ease: "easeInOut" },
    },
    bounceIn: {
        hidden: { opacity: 0, y: 200, scale: 0.5 },
        visible: { opacity: 1, y: 0, scale: 1 },
        transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    loadingSpinner: {
        animate: {
            rotate: [0, 360],
            transition: { duration: 1, loop: Infinity },
        },
        hidden: { rotate: 0 },
    }
}
