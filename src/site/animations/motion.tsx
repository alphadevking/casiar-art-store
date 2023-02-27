import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VariantTypes } from "./variants";

function Motion({ variants, className, children }: VariantTypes) {
    const [ref, inView] = useInView({
        threshold: 0.1, // Trigger animation when component is 10% visible
        triggerOnce: false, // Only trigger animation once
    });

    return (
        <motion.div
            ref={ref}
            className={`${className} transition-all duration-500 ease-in-out`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={variants}
        >
            {children}
        </motion.div>
    );
}

export default Motion;
