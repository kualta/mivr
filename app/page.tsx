import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Sprout,
  Ban,
  Flower2,
  Leaf,
  Headphones,
  Handshake,
  Feather,
  Circle,
  Wheat,
  Users,
  Mail,
  Coffee,
  Heart,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { SiVrchat } from "react-icons/si";

const DISCORD_LINK = "https://discord.gg/BZFXSmAesk";
const VRCHAT_GROUP_LINK =
  "https://vrchat.com/home/group/grp_7df82573-ed3d-424b-8c95-e5271559fa4e";
const KOFI_LINK = "https://ko-fi.com/mindfulinsightvr";
const EMAIL = "mindfulinsightvr@gmail.com";

const wholesomeSeeds = [
  {
    title: "Practice loving-kindness",
    body: "Speak and act with tenderness and consideration.",
  },
  {
    title: "Nurture joy and laughter",
    body: "Joy is not a luxury — it's a source of resilience and connection. Let it remind you what's worth showing up for.",
  },
  {
    title: "Be open-minded",
    body: "Ask rather than assume. Everyone comes from a unique background.",
  },
  {
    title: "Share the space, invite others in",
    body: "Notice how much air you're taking. Invite quieter voices in with a “What do you think?”",
  },
  {
    title: "Practice accountability",
    body: "Take honest responsibility for your impact. Make amends. Commit to doing better.",
  },
  {
    title: "Care for yourself",
    body: "Tend your own needs first. Feel comfortable leaving any event at any time, for any reason.",
  },
  {
    title: "Act with courage",
    body: "It takes bravery to be vulnerable and try new things. Be willing to stay present, even when it's uncomfortable.",
  },
  {
    title: "You are already enough",
    body: "You are not a project to be fixed. Who you are right now is whole and worthy of love.",
  },
];

const unwholesomeSeeds = [
  {
    title: "Using community in place of therapy",
    body: (
      <>
        We are laypeople, not a substitute for professional care. See{" "}
        <strong>#resource-library</strong> or open a support ticket.
      </>
    ),
  },
  {
    title: "NSFW or triggering specifics",
    body: "Harmful sexual material, substance specifics, self-harm details, etc.",
  },
  {
    title: "Harassment of any kind",
    body: "Verbal, sexual, or psychological — never welcome here.",
  },
  {
    title: "Discrimination",
    body: "Including racism, sexism, queerphobia, xenophobia, fatphobia, antisemitism, ableism, classism.",
  },
  {
    title: "Sharing what isn't yours to share",
    body: "What is said in confidential spaces stays there without consent.",
  },
  {
    title: "Diet culture & unsolicited advice",
    body: "No moralizing food, no implying certain bodies are more worthy.",
  },
  {
    title: "Promoting intoxicants or psychedelics",
    body: "Including framing them as necessary for insight or healing.",
  },
  {
    title: "Forcing beliefs or pseudoscience",
    body: "No pressuring others; no esoteric teachings framed as absolute truth.",
  },
  {
    title: "Unsolicited promotion",
    body: "Unless approved by a facilitator.",
  },
];

const events = [
  {
    Icon: Leaf,
    when: "Guided sit",
    title: "Guided Meditation with SaladCup",
    body: "A gently guided sit led by SaladCup. Settle in, follow the voice, and let the practice carry you.",
    core: true,
  },
  {
    Icon: Headphones,
    when: "Listening practice",
    title: "Deep Listening Practice",
    body: "An invitation to truly hear — and be heard. We practice receiving each other without fixing or interpreting.",
    core: true,
  },
  {
    Icon: Handshake,
    when: "Communication",
    title: "Mindful Communication",
    body: "A small-group practice in speaking and listening with care. Bring what's on your heart; meet what's on theirs.",
    core: true,
  },
  {
    Icon: Feather,
    when: "Drawing practice · on Discord",
    title: "Zen Untangle",
    body: "A meditative drawing practice we host on Discord. Loosen the lines, follow the pen, and see what comes through.",
    core: true,
  },
  {
    Icon: Circle,
    when: "Watch party",
    title: "Dharma Talk Watch Party",
    body: "An open group instance to watch dharma talks together in VRChat. Hosted by representatives.",
    core: false,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="welcome" className="hero" data-screen-label="Hero">
        <svg className="hero-enso" viewBox="0 0 600 600" aria-hidden="true">
          <defs>
            <linearGradient id="enso-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#7a8857" />
              <stop offset="0.45" stopColor="#c89c4a" />
              <stop offset="1" stopColor="#e08a52" />
            </linearGradient>
          </defs>
          <path
            d="M300 70 C 160 70, 70 175, 70 305 C 70 440, 175 540, 305 530 C 425 521, 520 430, 525 305 C 528 220, 488 145, 410 110"
            fill="none"
            stroke="url(#enso-grad)"
            strokeWidth="36"
            strokeLinecap="round"
          />
          <circle cx="118" cy="365" r="6" fill="#c89c4a" />
          <circle cx="98" cy="385" r="3" fill="#9b803a" />
          <circle cx="140" cy="395" r="4" fill="#a98549" />
        </svg>

        <div className="wrap hero-inner">
          <div className="hero-copy">
            <h1>
              Virtual spaces for <em>mindfulness,</em>{" "}
              <span className="ink">insight,</span> and joy.
            </h1>
            <p className="lede">
              A secular Buddhist community where meditation meets heartfelt
              conversation. We gather for quiet sits, dharma talks, peer support,
              and casual hangs — all from inside VR.
            </p>
            <p className="gift">Your presence is a gift.</p>
            <div className="hero-actions">
              <a
                className="btn btn-primary btn-lg"
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="ic-fill" />
                Join the Discord
              </a>
              <a className="btn btn-outline btn-lg" href="#rhythm">
                <Calendar className="ic" />
                See our practice
              </a>
            </div>
            <div className="hero-meta">
              <span>🌿 New here? Just show up — no experience needed.</span>
            </div>
          </div>

          <div className="hero-banner" aria-hidden="true">
            <Image
              src="/MIVR_Welcome_Banners_1.8.png"
              alt="Welcome to Mindful Insight VR"
              width={1200}
              height={400}
              priority
            />
            <div className="quote">
              Practice together. Show up as you are.
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="hero-manifesto">
            <p>
              We meet inside <span className="serif-italic">VRChat</span>.
              <br />
              Desktop, mobile, or any headset works.
            </p>
            <span className="manifesto-sep" aria-hidden="true"></span>
            <p className="muted">
              No experience needed. New folks are always welcome.
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="rhythm" className="sec rhythm" data-screen-label="Practice">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Our practice</span>
            <h2>
              What we <em>gather</em> for.
            </h2>
            <p className="lede">
              Our events are warm, safe, and accessible. No previous experience
              is required. Some move to a private instance once they begin, so
              be sure to arrive on time.
            </p>
          </div>

          <div className="schedule">
            {events.map(({ Icon, when, title, body, core }) => (
              <article
                key={title}
                className={core ? "event coreEvent" : "event"}
              >
                <div className="glyph">
                  <Icon className="ic" />
                </div>
                <div className="when">{when}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className="rhythm-foot">
            <p className="muted small">
              Schedules and one-offs live on Discord — pop in for the latest
              times.
            </p>
            <a
              className="btn btn-outline"
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              See the schedule on Discord
              <ArrowRight className="ic" />
            </a>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section id="guidelines" className="sec" data-screen-label="Guidelines">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Guidelines &amp; Rules</span>
            <h2>
              How we <em>tend</em> the garden.
            </h2>
            <p className="lede">
              By participating in this server and community, you agree to the
              following — written as a thoughtful letter, not legalese.
            </p>
          </div>

          <div className="guidelines-grid">
            <div className="panel warm">
              <div className="panel-head">
                <div className="glyph">
                  <Sprout className="ic" />
                </div>
                <div className="titles">
                  <span className="kicker">Water these</span>
                  <h3>Wholesome seeds</h3>
                </div>
              </div>
              <ul className="seed-list">
                {wholesomeSeeds.map((s) => (
                  <li key={s.title}>
                    <Flower2 className="seed-mark ic" />
                    <div>
                      <div className="seed-title">{s.title}</div>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel cool">
              <div className="panel-head">
                <div
                  className="glyph"
                  style={{ color: "oklch(0.6 0.07 35)" }}
                >
                  <Ban className="ic" />
                </div>
                <div className="titles">
                  <span className="kicker">Please refrain</span>
                  <h3>Unwholesome seeds</h3>
                </div>
              </div>
              <ul className="seed-list refrain">
                {unwholesomeSeeds.map((s) => (
                  <li key={s.title}>
                    <Ban className="seed-mark ic" />
                    <div>
                      <div className="seed-title">{s.title}</div>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="guidelines-foot">
            <div className="consequences">
              <h4>Consequences are firm yet fair.</h4>
              <div className="consequences-row">
                <span className="tier t1">✋ Gentle</span>
                <p>
                  Most slips get a quiet reminder or redirect. We&apos;ve all
                  been there.
                </p>
              </div>
              <div className="consequences-row">
                <span className="tier t2">⚠ Warning</span>
                <p>
                  Repeated or impactful behavior may earn a warning, temporary
                  mute, or removal — proportional to harm.
                </p>
              </div>
              <div className="consequences-row">
                <span className="tier t3">🔨 Ban</span>
                <p>
                  Scamming, soliciting, hate speech, harassment, threatening or
                  violent language → immediate ban.
                </p>
              </div>
              <div className="consequences-row">
                <span className="tier t4">? Unsure</span>
                <p>
                  Open <strong>#open-a-support-ticket</strong> on Discord.
                  We&apos;d rather you ask.
                </p>
              </div>
            </div>

            <aside className="grace">
              <div className="quotemark">&ldquo;</div>
              <p>
                We are all learning. It&apos;s okay to make mistakes. We are
                all doing the best we can in the situation we are in, with the
                understanding, resources, and tools we have.
              </p>
              <span className="by">— Thank you for having grace</span>
            </aside>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="sec roles" data-screen-label="Stewards">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Facilitators &amp; Representatives</span>
            <h2>
              The people who <em>hold</em> the space.
            </h2>
            <p className="lede">
              Two ways to step into stewardship. Both rest on the same trust:
              that you wish, sincerely, to support others.
            </p>
          </div>

          <div className="roles-grid">
            <div className="role">
              <div className="role-marker">
                <Leaf className="ic" />
              </div>
              <span className="role-eyebrow">
                Stewardship · Hosts core events
              </span>
              <h3>Facilitators</h3>
              <p>
                Our facilitators host the core events and run the community.
                They have shown care, integrity, and a genuine wish to support
                others.
              </p>
              <p className="quiet">
                New facilitators are invited based on their application and
                engagement. All current facilitators must unanimously agree to
                invite someone new.
              </p>
              <blockquote className="role-pullquote">
                &ldquo;How you are matters more to us than how much you
                know.&rdquo;
              </blockquote>
              <p className="quiet">
                We look for those who help water the wholesome seeds of our
                community: mindfulness, insight, and joy. We don&apos;t expect
                perfection — only sincere commitment to doing your best by this
                community.
              </p>
              <div className="role-foot">
                <Feather className="ic" />
                <span>
                  Applications open in{" "}
                  <strong>#facilitator-applications</strong> on Discord.
                </span>
              </div>
            </div>

            <div className="role">
              <div className="role-marker">
                <Wheat className="ic" />
              </div>
              <span className="role-eyebrow">
                Stewardship · Hosts peer events
              </span>
              <h3>Representatives</h3>
              <p>
                Representatives are dear friends in the community whose presence
                reflects a deep commitment to nurturing mindfulness and
                compassion. Facilitators trust them to represent us in the
                wider world.
              </p>
              <p className="quiet">
                After spending time at our events, if you feel moved to be more
                deeply involved, you are warmly invited to step forward.
              </p>
              <div className="role-foot">
                <Handshake className="ic" />
                <span>
                  Open <strong>#open-a-support-ticket</strong> to express
                  interest.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="support-wrap" data-screen-label="Support">
        <div className="wrap support-inner">
          <span className="eyebrow">Please support us</span>
          <h2>
            If you find value in what we do, <em>please help us grow.</em>
          </h2>
          <p className="lede">
            We&apos;re a small community held up by the people who show up — and
            the people who give a little so others can. Every gentle action
            helps.
          </p>

          <div className="support-asks">
            <div className="ask">
              <div className="gly">
                <Users className="ic" />
              </div>
              <p>
                Would you please join our <strong>VRChat Group</strong> and
                invite others who might benefit?
              </p>
            </div>
            <div className="ask">
              <div className="gly">
                <FaDiscord className="ic-fill" />
              </div>
              <p>
                Would you please <strong>give our Discord server a boost</strong>? 🙌
              </p>
            </div>
            <div className="ask">
              <div className="gly">
                <Mail className="ic" />
              </div>
              <p>
                Would you please reach out at <strong>{EMAIL}</strong>?
              </p>
            </div>
          </div>

          <div className="support-cta">
            <a
              className="btn btn-primary btn-lg"
              href={KOFI_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Coffee className="ic" />
              Support us on Ko-fi
            </a>
            <p className="muted small">
              <Heart className="ic ic-sm" /> Donations sustain our facilitators
              and ongoing improvements.
            </p>
          </div>

          <p className="support-thanks">
            From the bottom of our hearts — thank you for anything you are able
            to contribute comfortably.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec" data-screen-label="Contact">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Stay in touch</span>
            <h2>
              Come <em>say hello.</em>
            </h2>
            <p className="lede">
              Connect on whichever platform fits you. We&apos;ll meet you there.
            </p>
          </div>

          <div className="contact-grid contact-grid-2">
            <a
              className="contact-tile"
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="ic-big brand-discord" />
              <h4>Join our Discord</h4>
              <p>
                The heart of the community. Conversations, support tickets, and
                the event schedule live here.
              </p>
              <span className="go">
                Open Discord <ArrowRight className="ic" />
              </span>
            </a>
            <a
              className="contact-tile"
              href={VRCHAT_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVrchat className="ic-big brand-vrchat" />
              <h4>VRChat Group</h4>
              <p>
                Step into the room. All events happen inside VRChat — desktop,
                mobile, or any headset works.
              </p>
              <span className="go">
                Join in VR <ArrowRight className="ic" />
              </span>
            </a>
          </div>

          <p
            className="muted small center"
            style={{ marginTop: "2rem" }}
          >
            We welcome your questions, feedback, and participation. Choose the
            platform that works best for you.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ftr">
        <div className="wrap">
          <div className="ftr-grid">
            <div className="ftr-brand">
              <div className="row">
                <Image
                  src="/mivr_icon.png"
                  alt=""
                  width={44}
                  height={44}
                />
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1.0625rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Mindful Insight VR
                  </div>
                  <div className="muted small">A sangha community</div>
                </div>
              </div>
              <p>
                A secular Buddhist community gathering inside VRChat for sits,
                dharma talks, peer support, and casual hangs. New members
                always welcome.
              </p>
            </div>

            <div>
              <h5>Community</h5>
              <ul>
                <li>
                  <a href="#rhythm">Practice</a>
                </li>
                <li>
                  <a href="#guidelines">Guidelines</a>
                </li>
                <li>
                  <a href="#roles">Stewards</a>
                </li>
                <li>
                  <a href="#support">Support us</a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Connect</h5>
              <ul>
                <li>
                  <a
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href={VRCHAT_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VRChat Group
                  </a>
                </li>
                <li>
                  <a
                    href={KOFI_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ko-fi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Reach out</h5>
              <ul>
                <li>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="ftr-bottom">
            <span>© 2026 Mindful Insight VR.</span>
            <span className="blessing">
              May all beings be well, safe, and at ease.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
