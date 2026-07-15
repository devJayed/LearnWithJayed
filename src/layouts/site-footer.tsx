import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { navigationLinks } from "@/constants/navigation";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-card">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <a href="#home" className="text-xl font-black">
            LearnWith<span className="text-primary">Jayed</span>
          </a>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A focused ICT learning platform for HSC students, combining structured offline batches
            with a scalable online LMS roadmap.
          </p>
          <div className="flex gap-3">
            {[
              { label: "Facebook", icon: FaFacebookF },
              { label: "YouTube", icon: FaYoutube },
              { label: "LinkedIn", icon: FaLinkedinIn },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#social"
                aria-label={label}
                className="focus-ring grid size-10 place-items-center rounded-md border text-muted-foreground transition hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-normal">Quick Links</h2>
          <nav className="grid gap-3">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-normal">Contact</h2>
          <address className="space-y-3 text-sm not-italic text-muted-foreground">
            <p>Faridpur Zhituli, Bangladesh</p>
            <p>learnwithjayed.com</p>
            <p>Admission desk opening soon</p>
          </address>
        </div>
      </div>
      <div className="border-t py-5 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LearnWithJayed.com. All rights reserved.
      </div>
    </footer>
  );
}
