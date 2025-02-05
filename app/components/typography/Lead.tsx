interface LeadProps extends React.ComponentPropsWithoutRef<"p"> {
  children: string;
}

export default function Lead({ children }: LeadProps) {
  return <p className="text-muted-foreground text-xl">{children}</p>;
}
