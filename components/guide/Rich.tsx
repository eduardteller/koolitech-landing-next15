/* Guide copy with **bold** for on-screen labels (content/ekell-guide.ts). */
const Rich = ({ text }: { text: string }) => (
  <>
    {text.split("**").map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-ink font-semibold">
          {part}
        </strong>
      ) : (
        part
      ),
    )}
  </>
);

export default Rich;
