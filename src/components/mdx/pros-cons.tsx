interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <h4 className="font-mono text-primary mb-2">Pros</h4>
        <ul className="list-disc pl-5 space-y-1">
          {pros.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-primary mb-2">Cons</h4>
        <ul className="list-disc pl-5 space-y-1">
          {cons.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
