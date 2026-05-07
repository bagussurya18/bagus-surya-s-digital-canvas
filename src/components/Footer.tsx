import { Github, Instagram, Mail, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-3">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain."
          </div>
          <p className="text-sm text-muted-foreground mb-6">— HR. Ahmad</p>
          <div className="flex justify-center gap-3 mb-6">
            {[
              { Icon: Github, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Mail, href: "#contact" },
              { Icon: MessageCircle, href: "#contact" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="size-10 grid place-items-center rounded-xl glass hover:shadow-glow hover:-translate-y-0.5 transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Bagus Surya Portfolio. Made with
            <Heart className="size-3 text-primary fill-primary" />
            and lots of coffee.
          </div>
        </div>
      </div>
    </footer>
  );
}
