import { motion } from "framer-motion";

export const SlideUpAnimation = ({ children, className = "" }: { children: React.ReactNode, className: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}