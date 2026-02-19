export default function DNAMolecule() {
    return (
        <div className="dna-wrapper">
            <div className="dna">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div
                        key={i}
                        className="dna-rung"
                        style={{ "--i": i }}
                    >
                        <span className="dot left" />
                        <span className="connector" />
                        <span className="dot right" />
                    </div>
                ))}
            </div>
        </div>
    );
}
