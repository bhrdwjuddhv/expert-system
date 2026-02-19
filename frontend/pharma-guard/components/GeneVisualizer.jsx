import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useState } from "react";

/* =========================
   Risk Color Mapping
========================= */

const RISK_COLORS = {
    Safe: "#22c55e",
    "Adjust Dosage": "#f59e0b",
    Toxic: "#ef4444",
    Ineffective: "#ef4444",
    Unknown: "#a855f7",
};

/* =========================
   DNA Double Helix
========================= */

function DNAHelix() {
    const groupRef = useRef();

    // subtle rotation animation
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
        }
    });

    const segments = 40;
    const radius = 1;
    const height = 8;

    const strand = [];

    for (let i = 0; i < segments; i++) {
        const t = (i / segments) * Math.PI * 6;
        const y = (i / segments) * height - height / 2;

        strand.push(
            <mesh key={`a-${i}`} position={[Math.cos(t) * radius, y, Math.sin(t) * radius]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial color="#06b6d4" />
            </mesh>
        );

        strand.push(
            <mesh key={`b-${i}`} position={[Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial color="#06b6d4" />
            </mesh>
        );
    }

    return <group ref={groupRef}>{strand}</group>;
}

/* =========================
   Variant Sphere with Tooltip
========================= */

function VariantSphere({ variant, index, total, minPos, maxPos }) {
    const [hovered, setHovered] = useState(false);

    const height = 8;
    const helixTurns = Math.PI * 6;
    const radius = 1;

    // --- Even spacing baseline ---
    const baseSpacing =
        total > 1 ? index / (total - 1) : 0.5;

    // --- Genomic normalization ---
    let genomicNormalized =
        maxPos === minPos
            ? 0.5
            : (variant.position - minPos) / (maxPos - minPos);

    // --- Blend them (prevents collapse) ---
    const normalized =
        0.5 * genomicNormalized + 0.5 * baseSpacing;

    const y = normalized * height - height / 2;

    // Slight rotation offset to avoid stacking
    const angle = normalized * helixTurns + index * 0.4;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    return (
        <mesh
            position={[x, y, z]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
                color={RISK_COLORS[variant.risk_label] || "#ffffff"}
            />

            {hovered && (
                <Html distanceFactor={10}>
                    <div className="bg-slate-800 text-white text-xs px-3 py-1 rounded-lg shadow-lg border border-cyan-500">
                        {variant.rsid}
                    </div>
                </Html>
            )}
        </mesh>
    );
}


/* =========================
   Floating Gene Label
========================= */

function GeneLabel({ gene }) {
    return (
        <Html position={[0, 4.5, 0]}>
            <div className="text-cyan-400 font-semibold text-sm tracking-wide">
                {gene}
            </div>
        </Html>
    );
}

/* =========================
   MAIN COMPONENT
========================= */

export default function GeneVisualizer({ variants = [], gene = "CYP2D6" }) {
    const minPos = Math.min(...variants.map(v => v.position || 0), 0);
    const maxPos = Math.max(...variants.map(v => v.position || 1), 1);

    return (
        <div className="h-[500px] w-full bg-slate-900 rounded-2xl border border-cyan-500/20">
            <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* DNA Helix */}
                <DNAHelix />

                {/* Variants */}
                {variants.map((variant, index) => (
                    <VariantSphere
                        key={index}
                        variant={variant}
                        index={index}
                        total={variants.length}
                        minPos={minPos}
                        maxPos={maxPos}
                    />
                ))}


                {/* Gene Label */}
                <GeneLabel gene={gene} />

                <OrbitControls enableZoom enableRotate />
            </Canvas>
        </div>
    );
}
