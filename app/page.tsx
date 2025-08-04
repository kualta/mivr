import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { SiVrchat, SiKofi } from "react-icons/si";
import { Mail, Sprout, Ban, Scale, Bug, Flower2, Wheat, Music2, Circle, Palmtree, Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto py-6 px-4 sm:py-10 max-w-4xl">
      <div className="space-y-32 sm:space-y-48 text-center">
        {/* Hero Section */}
        <section id="welcome" className="space-y-8 my-16 sm:my-32 sm:mt-20">
          <Image
            src="/MIVR_Welcome_Banners_1.8.png"
            alt="Mindful Insight VR Welcome Banner"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg select-none mb-12"
            priority
          />
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Virtual spaces for mindfulness, insight, and joy
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A secular Buddhist community where meditation meets heartfelt conversation. Your presence is a gift.
            </p>
          </div>
        </section>

        {/* Guidelines Section */}
        <section id="guidelines" className="space-y-8">
          <Image
            src="/MIVR_Guidelines_Rules_Banner_1.0.png"
            alt="Mindful Insight VR Guidelines and Rules Banner"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg select-none mb-8"
          />
          <div className="space-y-4">
            <p className="text-base sm:text-lg font-medium">
              By participating in this server and community, you agree to the following guidelines and rules:
            </p>
          </div>

          {/* Water Wholesome Seeds */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl"><Sprout className="w-5 h-5 inline mr-2" />Water Wholesome Seeds</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-left text-sm sm:text-base">
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Practice Loving-Kindness</span> Speak and act with tenderness and consideration.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Nurture Joy and Laughter</span> Joy is not a luxury, it&apos;s a source of resilience and connection. Enjoy small moments and celebrate each other. Let joy be a reminder of what makes life meaningful and worth showing up for.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Be open-minded</span> Ask rather than assume. Everyone comes from unique backgrounds and life experiences.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Share the Space and Invite Others In</span> Be mindful of the amount of space you&apos;re taking verbally, emotionally, and energetically. Practice inviting others into the conversation by asking &quot;What do you think?&quot; or &quot;What&apos;s on your mind?&quot;</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Practice Accountability</span> Take honest responsibility for your actions and their impact, make amends when needed, and commit to doing better.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Care for Yourself</span> Make tending to your needs a priority. There&apos;s no pressure to stay beyond what feels right. Feel comfortable leaving any event at any time for any reason. Let a facilitator know if you need accommodations or support.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Act With Courage</span> Practice bravery. It takes courage to be vulnerable and try new things. Be willing to engage with the present moment even when it&apos;s uncomfortable.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-bold"><Flower2 className="w-4 h-4 inline mr-1" />Remember, You Are Already Enough</span> You are not a project to be fixed or optimized. Who you are right now is already whole and worthy. Growth can happen, but it doesn&apos;t make you more deserving of love.</p>
              </div>
            </CardContent>
          </Card>

          {/* Do Not Water Unwholesome Seeds */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl"><Ban className="w-5 h-5 inline mr-2" />Do Not Water Unwholesome Seeds</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-left text-sm sm:text-base">
              <p className="font-medium">Please refrain from the following:</p>
              <ul className="space-y-3 ml-4">
                <li>• <span className="font-bold">Using this community in place of therapy.</span> We are not a substitute for professional mental health care. You are responsible for your health and well-being. Please refer to our resource library or reach out at <span className="font-bold">open-a-support-ticket</span> channel on discord if you would like help from a facilitator. Note that we are laypeople and non-therapists.</li>
                <li>• <span className="font-bold">NSFW content</span> including harmful sexual material and triggering specifics (ie substances, self-harm behaviors, etc).</li>
                <li>• <span className="font-bold">Harassment</span> of any kind (verbal, sexual, or psychological).</li>
                <li>• <span className="font-bold">Discrimination</span> including but not limited to racism, nationalism, anti-immigrant rhetoric, sexism, homophobia, transphobia, xenophobia, fatphobia, antisemitism, ableism, or classism.</li>
                <li>• <span className="font-bold">Sharing what isn&apos;t yours to share.</span> What is expressed in confidential spaces should not leave them without consent.</li>
                <li>• <span className="font-bold">Diet culture</span> including moralizing food, giving unsolicited nutrition/exercise advice, pushing restrictive eating rules, discussing numbers (calories, macros, weight), perpetuating weight stigma, or implying that certain body shapes are inherently more valid, healthy, or worthy than others.</li>
                <li>• <span className="font-bold">Promotion of intoxicants or psychedelics</span> including encouraging their use, giving advice on obtaining or using them, glorifying experiences, or suggesting they&apos;re necessary for insight or healing.</li>
                <li>• <span className="font-bold">Conspiracy theories, pseudoscientific claims,</span> or esoteric teachings framed as absolute truths.</li>
                <li>• <span className="font-bold">Forcing beliefs</span> including pressuring others to adopt your religious, spiritual, or atheistic beliefs. Also, actions such as preaching, dismissing others&apos; beliefs, claiming moral or spiritual superiority, or using beliefs to shame or control.</li>
                <li>• <span className="font-bold">Unsolicited promotion or advertising</span> unless approved by a facilitator.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Consequences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl"><Scale className="w-5 h-5 inline mr-2" />Consequences</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-3 text-left text-sm sm:text-base">
              <p>Our approach is firm yet fair:</p>
              <p>✋ Some violations may result in a gentle reminder or redirect.</p>
              <p>⚠️ Others may lead to a warning, temporary mute, or removal depending on the severity and impact.</p>
              <p>🔨 Excessive harmful behavior (ie scamming, soliciting, hate speech, harassment, threatening or violent language) may result in an immediate ban.</p>
              <p>❓ If you&apos;re unsure whether something is appropriate ➡️ <span className="font-bold">open-a-support-ticket</span> channel on discord</p>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl"><Mail className="w-5 h-5 inline mr-2" />Need Support or Have a Concern?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-left text-sm sm:text-base">
              <p>Please <span className="font-bold">open-a-support-ticket</span> channel on discord if:</p>
              <ul className="ml-4 space-y-1">
                <li>• You&apos;re feeling unsafe or overwhelmed</li>
                <li>• You need accommodations</li>
                <li>• You&apos;ve witnessed a rule violation</li>
                <li>• You have feedback or questions</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                🕊️ Submitting a support ticket doesn&apos;t guarantee a specific outcome, but it does ensure your concerns are heard.
                We approach each situation with care, transparency, and a commitment to community well-being.
              </p>
            </CardContent>
          </Card>

          {/* Thank You Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl"><Bug className="w-5 h-5 inline mr-2" />Thank You For Having Grace</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-3 text-left text-sm sm:text-base">
              <p>We are all learning. It&apos;s okay to make mistakes. It&apos;s okay to uphold your boundaries with consequences.</p>
              <p>We are all doing the best we can in the situation we are in with the current understanding, resources, and tools we have.</p>
              <p className="font-bold">Thank you for your care and willingness to co-create this mindful and insightful community.</p>
            </CardContent>
          </Card>
        </section>

        {/* Events Section */}
        <section id="events" className="space-y-8">
          <Image
            src="/MIVR_MIndful_Insight_Events_Banner_1.0.png"
            alt="Mindful Insight VR Events Banner"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg select-none mb-8"
          />
          <Card>
            <CardContent className="space-y-4 text-left text-sm sm:text-base">
              <p>Our events are warm, safe, and accessible. New members are always welcome. No previous experience is required for any events. Some events move to a private instance once they begin, so be sure to arrive on time!</p>
              <p>See <span className="font-bold">events</span> channel on discord for the full schedule of events and information.</p>

              <div className="mt-6">
                <h3 className="font-bold text-base sm:text-lg mb-3">Peer-Led Event Categories</h3>
                <p className="mb-4">Interested in hosting an event? Community members are welcome to lead casual gatherings, offering a shared space for connection without the need for formal facilitation. Below are two examples of peer-led event formats. For details on becoming a Mindful Insight Representative, see the post below.</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-bold"><Music2 className="w-4 h-4 inline mr-1" />Joyful Movement Invitations</p>
                    <p className="ml-4">Spontaneous invitations to dance, stretch, or move with joy. Anyone can post and join. No need to lead or plan. Just invite folks along with you to whatever joyful movement you are up to!</p>
                    <p className="ml-4 text-sm text-muted-foreground">➤ Check the <span className="font-bold">joyful-movement-invites</span> channel on discord and pinned message for more info.</p>
                  </div>

                  <div>
                    <p className="font-bold"><Circle className="w-4 h-4 inline mr-1" />Dharma Talk Watch Parties</p>
                    <p className="ml-4">Open a group instance to watch Dharma Talk youtube videos together in VRChat. Hosted by representatives.</p>
                  </div>

                  <div>
                    <p className="font-bold"><Palmtree className="w-4 h-4 inline mr-1" />Casual Hang Out</p>
                    <p className="ml-4">Open a group instance to host a casual hang out together in VRChat. Hosted by representatives.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Facilitators Section */}
        <section id="facilitators" className="space-y-8">
          <Image
            src="/MIVR_Facilitators_Banner_1.0.png"
            alt="Mindful Insight VR Facilitators Banner"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg select-none mb-8"
          />
          <Card>
            <CardContent className="space-y-4 text-left text-sm sm:text-base">
              <p>Our facilitators host our core events and run our community. They have shown care, integrity, and a genuine wish to support others. New facilitators are invited to join based on their application and engagement with the community. All current facilitators must unanimously agree to invite new facilitators.</p>

              <p><Sprout className="w-4 h-4 inline mr-1" />If you feel your values align with our community and you are moved to support others, whether through hosting or other skills, you are warmly invited to apply.</p>

              <p>We look for those who help water the wholesome seeds of our community: mindfulness, insight, and joy. We don&apos;t expect perfection, only a sincere commitment to doing your best by this community.</p>

              <p className="font-bold italic">How you are matters more to us than how much you know.</p>

              <p>🌿 Facilitators are here as a source of support and are happy to listen or answer questions.</p>

              <p>📝 Applications are open in <span className="font-bold">facilitator-applications</span> channel on discord</p>
            </CardContent>
          </Card>
        </section>

        {/* Representatives Section */}
        <section id="representatives" className="space-y-8">
          <Image
            src="/MIVR_Representatives_Banner_1.0.png"
            alt="Mindful Insight VR Representatives Banner"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg select-none mb-8"
          />
          <Card>
            <CardContent className="space-y-4 text-left text-sm sm:text-base">
              <p>Representatives are dear friends in our community whose presence and practice reflect a deep commitment to nurturing mindfulness and compassion in themselves and others. Facilitators unanimously decide that these individuals can be trusted to represent Mindful Insight VR.</p>

              <div className="mt-4">
                <h4 className="font-bold text-sm sm:text-base"><Sprout className="w-4 h-4 inline mr-1" />How to Become a Representative</h4>
                <p className="mt-2">This role is open to everyone. After spending time at our events, you may be interested in becoming more deeply involved. If you resonate with our practice and wish to support us and represent us in the wider world, we invite you to step forward.</p>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-sm sm:text-base"><Wheat className="w-4 h-4 inline mr-1" />Representative Access</h4>
                <ul className="mt-2 space-y-1">
                  <li><Sprout className="w-3 h-3 inline mr-1" />Ability to open Mindful Insight VR group instances in VRChat</li>
                  <li><Sprout className="w-3 h-3 inline mr-1" />Host certain events such as Dharma Talk Watch Parties and Casual Hang Outs</li>
                  <li><Sprout className="w-3 h-3 inline mr-1" />A &quot;Representative&quot; role in our discord</li>
                  <li><Sprout className="w-3 h-3 inline mr-1" />Access to <span className="font-bold">representatives</span> channel on discord</li>
                </ul>
              </div>

              <p className="mt-4">If you&apos;d like to learn more or express your interest, kindly open a support ticket in <span className="font-bold">open-a-support-ticket</span> channel on discord</p>
            </CardContent>
          </Card>
        </section>

        {/* Support Us Section */}
        <section id="support-us" className="space-y-8">
          <Image
            src="/MIVR_Please_Support_Us_Banner_1.0.png"
            alt="Mindful Insight VR Support Us Banner"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg select-none mb-8"
          />
          <Card>
            <CardContent className="space-y-4 text-left text-sm sm:text-base">
              <p className="font-bold">If you find value in what we do, please help us grow!</p>

              <p>Would you please join our Mindful Insight VR VRChat Group and invite others to join who might benefit from this community?</p>

              <p>Would you please consider giving our server a boost? 🙌</p>

              <div>
                <p>Would you please connect with us?</p>
                <div className="ml-4">
                  <p>📺 Youtube</p>
                  <p>📨 mindfulinsightvr@gmail.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <p><Coffee className="w-4 h-4 inline mr-1" />Would you please consider donating to our Ko-Fi?</p>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="gap-2">
                    <Link
                      href="https://ko-fi.com/mindfulinsightvr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiKofi size={20} />
                      Support us on Ko-fi
                    </Link>
                  </Button>
                </div>

                <p><Heart className="w-4 h-4 inline mr-1" />Donations help sustain and grow our community by supporting both our facilitators and ongoing improvements. When you contribute, you&apos;re directly supporting the people who offer their time and energy to make this space possible.</p>

                <p className="font-bold">From the bottom of our hearts, thank you for anything you are able to contribute comfortably.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <p className="text-sm sm:text-base">Connect with our community through multiple platforms</p>

              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="https://discord.gg/BZFXSmAesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg border transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FaDiscord size={64} />
                  <span className="font-bold">Join our Discord</span>
                  <span className="text-sm text-muted-foreground text-center">Connect with our community</span>
                </Link>

                <Link
                  href="https://vrchat.com/home/group/grp_7df82573-ed3d-424b-8c95-e5271559fa4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg border transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <SiVrchat size={64} />
                  <span className="font-bold">VRChat Group</span>
                  <span className="text-sm text-muted-foreground text-center">Join us in virtual reality</span>
                </Link>

                <a
                  href="mailto:mindfulinsightvr@gmail.com"
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg border transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Mail size={64} />
                  <span className="font-bold">Email Us</span>
                  <span className="text-sm text-muted-foreground text-center">mindfulinsightvr@gmail.com</span>
                </a>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  We welcome your questions, feedback, and participation. Choose the platform that works best for you!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}