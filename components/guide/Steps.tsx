import type { Step } from "@/content/ekell-guide";
import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import Rich from "./Rich";
import Screenshot from "./Screenshot";
import Sketch from "./Sketches";

/** Text, note and link of a step; also used for one-off callouts. */
export const StepBody = ({ step }: { step: Step }) => (
  <>
    {step.text.map((p) => (
      <p key={p} className="text-muted mt-3 leading-relaxed">
        <Rich text={p} />
      </p>
    ))}
    {step.note && (
      <p className="text-muted mt-3 flex items-start gap-2 text-sm leading-relaxed">
        <Info
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="text-accent mt-0.5 shrink-0"
        />
        <span>
          <Rich text={step.note} />
        </span>
      </p>
    )}
    {step.action && <StepAction {...step.action} />}
  </>
);

const StepAction = ({ href, label }: { href: string; label: string }) => {
  const className =
    "border-ink text-ink hover:bg-primary-tint mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition";
  const content = (
    <>
      {label}
      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
    </>
  );
  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
};

export const StepMedia = ({ step }: { step: Step }) => {
  if (step.sketch) return <Sketch name={step.sketch} />;
  if (!step.shots) return null;
  if (step.shots.length === 1) {
    return <Screenshot shot={step.shots[0]} className="mt-6" />;
  }
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {step.shots.map((shot) => (
        <Screenshot
          key={shot.src}
          shot={shot}
          sizes="(min-width: 640px) 384px, 100vw"
        />
      ))}
    </div>
  );
};

interface Props {
  steps: Step[];
}

/* Numbered steps on a rail: the number sits in the left column and a
   line runs down to the next one. */
const Steps = ({ steps }: Props) => {
  return (
    <ol className="mt-12">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-14 last:pb-0 sm:gap-x-6"
        >
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="bg-line absolute top-12 bottom-2 left-5 w-px -translate-x-1/2"
            />
          )}
          <span className="border-primary-line bg-primary-tint text-accent flex h-10 w-10 items-center justify-center rounded-full border font-semibold tabular-nums">
            {i + 1}
          </span>
          <div className="pt-1.5">
            <h3 className="text-ink text-xl leading-snug font-semibold tracking-tight">
              {step.title}
            </h3>
            <StepBody step={step} />
            <StepMedia step={step} />
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Steps;
