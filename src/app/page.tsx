import { LockedVideoStrip } from "@/components/common/locked-video";
import { AgentsAndInteropSection } from "@/components/sections/agents-and-interop";
import { BuildUniverseSection } from "@/components/sections/build-universe";
import { CommunityCreationsSection } from "@/components/sections/community-creations";
import { CreatorProgram } from "@/components/sections/creator-program";
import { CtaGradientStrip } from "@/components/sections/cta-gradient-strip";
import { DualTrackGTMSection } from "@/components/sections/dual-track";
import { EconomyOwnershipSection } from "@/components/sections/economy-ownership";
import { GifStrip } from "@/components/sections/gif-strip";
import { Hero } from "@/components/sections/hero";
import { StayConnectedFooter } from "@/components/sections/stay-connected";
 

export default function Page() {
  return (
    <main>
      <Hero />
      <CreatorProgram />

      <LockedVideoStrip
        designWidth={1351}
        designHeight={399.66}
        src="/video/uri_ifs___V_Tr6MBzCDC7AHEo_ET6ebBzKITscmfOlTp36vPo7q_-A.mp4"
      />

      <BuildUniverseSection />
      <LockedVideoStrip
        src="https://res.cloudinary.com/dzfajfr7g/video/upload/v1761837846/meadows_tafrkg.mp4"
        designWidth={1351}
        designHeight={520}
        overlay
        overlayClass="bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.35)_100%)]"
        vignette
      />
      <AgentsAndInteropSection />
      <CommunityCreationsSection />
      <GifStrip
        src="/images/dragon-stomp-with-player-angle.gif"
        alt="Dragon stomp with player angle"
        heightClass="h-[49vh] md:h-[49vh] lg:h-[49vh]"
        overlay
        overlayClass="bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.35)_100%)]"
        vignette
      />
      <EconomyOwnershipSection />
      <DualTrackGTMSection />
      <CtaGradientStrip />
      <StayConnectedFooter
        socials={{
          youtube: "https://youtube.com/@avalon",
          discord: "https://discord.gg/tu-invite",
          x: "https://x.com/tu-cuenta",
        }}
        pressKitHref="/press-kit"
      />
    </main>
  );
}
