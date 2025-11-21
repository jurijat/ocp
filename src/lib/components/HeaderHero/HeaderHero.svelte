<script lang="ts">
  import { asset } from "$app/paths";
  import { onMount } from "svelte";
  import SocialIcons from "./SocialIcons.svelte";
  import AddToCalendarPopup from "../AddToCalendarPopup.svelte";

  // Countdown to December 11, 2025
  const targetDate = new Date("2025-12-11T00:00:00");

  let days = $state(0);
  let hours = $state(0);
  let minutes = $state(0);
  let seconds = $state(0);

  // Calendar popup state
  let showCalendarPopup = $state(false);

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff > 0) {
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<header
  class="flex flex-col tablet:flex-row h-[667px] tablet:min-h-0 tablet:h-[clamp(640px,50vw+160px,900px)] text-text-primary overflow-hidden desktop:h-[max(800px,50vw+160px)] desktop-xl:h-[min(100vh,1117px)]"
>
  <!-- Left Content Container (2/3) -->
  <div
    class="flex w-full tablet:w-2/3 flex-col tablet:px-4 tablet:py-8 desktop:p-16 desktop-xxl:p-24 tablet:border-r-border-primary pt-6"
  >
    <!-- Logos Section -->
    <div
      class="flex flex-row w-full items-center h-10.5 px-4 tablet:mb-[22px] desktop:mb-[clamp(43px,1vh,91.5px)] desktop-xxl:mb-[43px] desktop:h-16 tablet:px-0 justify-between"
    >
      <div
        class="w-40 tablet:w-44 tablet:pl-4 desktop:pl-0 h-10.5 desktop:h-16 desktop:w-[243px] desktop-xxl:h-18 desktop-xxl:w-[273px] flex items-center justify-center text-text-muted text-sm"
      >
        <img
          src={asset("/images/openapi_initiative_logo.svg")}
          alt="OpenAPI Conference Logo"
          class="w-40 tablet:w-[243px] desktop-xxl:w-[273px] desktop-xxl:h-[72px] h-10.5"
        />
      </div>
      <div
        class="w-16 tablet:w-24 h-10.5 desktop-xxl:w-[119px] desktop-xxl:h-[62px] flex items-center justify-center text-text-muted text-sm"
      >
        <a
          href="https://www.futureofsoftwaretechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={asset("/images/img_hosted_by_fost.png")}
            alt="Hosted by Fost Logo"
            class="w-16 h-3 tablet:h-[32px] desktop:w-[97px] desktop:h-[52px] desktop-xxl:w-[119px] desktop-xxl:h-[62px]"
          />
        </a>
      </div>
    </div>

    <!-- Title Section -->
    <div
      class="flex flex-col h-[clamp(180px,50vw+16px,231px)] mobile:h-[231px] justify-center tablet:h-auto px-4 tablet:mb-0 desktop:pb-0 tablet:px-0"
    >
      <div
        class="flex flex-col justify-center text-[clamp(32px,10vw+12px,55px)] mobile:text-[55px] h-[159px] tablet:h-auto tablet:text-[clamp(80px,5vw+32px,160px)] desktop:text-[clamp(6rem,5vw+32px,8rem)] font-bold leading-[1.05] tablet:leading-none tracking-tighter desktop-xl:text-[clamp(8rem,5vw+24px,11rem)] desktop-xl:leading-[clamp(8rem,5vw+24px,11rem)] desktop-xxl:leading-[10rem] desktop-xxl:text-[180px] wrap-break-word"
      >
        <span class="text-primary block">OPENAPI</span>
        <span class="text-text-primary block">CONFERENCE</span>
        <span class="text-text-primary block">IN PARIS</span>
      </div>
    </div>

    <!-- Decorative Line (tablet/desktop) -->
    <div
      class="hidden tablet:block z-10 w-full h-px tablet:mt-4 tablet:mb-6 desktop:mt-[clamp(1.5rem, 2vw, 2.5rem)] desktop:mb-[clamp(1.5rem, 2vw, 2.5rem)] pb-px bg-border-primary"
    ></div>

    <!-- Decorative Line (mobile) -->
    <div class="tablet:hidden w-full h-px bg-border-primary pb-px"></div>

    <!-- Subtitle with Date and Calendar -->
    <div
      class="flex flex-row items-center justify-between gap-2 border-0 tablet:border-0 rounded-lg tablet:rounded-none p-3 tablet:p-0 rounded-b-4xl h-16 tablet:h-fit bg-bg-dark tablet:bg-transparent relative z-10"
    >
      <div
        class="text-sm tablet:text-[14px] tracking-widest desktop-xl:text-xl desktop-xxl:text-[28px] font-bold text-text-primary uppercase"
      >
        11 December, 2025
      </div>
      <a
        href="#"
        role="button"
        onclick={(e) => {
          e.preventDefault();
          showCalendarPopup = true;
        }}
        onkeydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            showCalendarPopup = true;
          }
        }}
        class="flex text-xs tablet:text-[11px] desktop-xl:text-[13px] items-center gap-x-2 transition-colors duration-transition-fast uppercase text-text-muted hover:text-primary hover:cursor-pointer tracking-widest leading-tightest"
      >
        <span class="text-4xl -mt-1">+</span>
        <span>Add to <br class="block tablet:hidden" /> calendar</span>
      </a>
    </div>

    <!-- Mobile-only Location Card (beneath date section) -->
    <a
      href="https://maps.google.com/?q=CNIT+Forest,+2+Pl.+de+la+Defense,+92092+Puteaux,+France"
      target="_blank"
      rel="noopener noreferrer"
      class="tablet:hidden p-4 relative h-[152px] -mt-6 rounded-b-4xl overflow-hidden bg-fill bg-no-repeat bg-center block cursor-pointer"
      style="background-image: url({asset(
        '/images/background/background_top_right.jpg'
      )})"
    >
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-[#00000070]"></div>

      <!-- Content -->
      <div class="absolute inset-0 flex items-center justify-between px-4 pt-4">
        <div class="flex flex-col">
          <span class="text-2xl font-bold text-text-primary tracking-wide"
            >CNIT FOREST, PARIS</span
          >
          <span class="text-sm text-white tracking-widest font-normal"
            >2 PL. DE LA DEFENSE, 92092 PUTEAUX, FRANCE</span
          >
        </div>
        <div
          class="shrink-0 bg-black rounded-full flex items-center w-14 h-14 justify-center"
        >
          <svg
            class="w-8 h-8 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
        </div>
      </div>
    </a>

    <!-- Register Button -->
    <div
      class="tablet:flex tablet:flex-col tablet:h-full tablet:justify-end desktop:justify-center px-4 tablet:px-0"
    >
      <div>
        <a
          href="https://ticket.apidays.global/event/apidays-paris-2025/3cccd07f-acb2-466e-8d91-cb1f208ecf42/openapi-conference"
          target="_blank"
          rel="noopener noreferrer"
          class="group/btn bg-primary mt-4 tablet:mt-0 desktop-xxl:mt-12 rounded-full flex font-bold tracking-wide px-4 items-center justify-between h-18 desktop-xl:h-30 w-full active:bg-primary-green-dark text-text-on-green text-xl tablet:text-3xl desktop-xxl:text-[42px] uppercase py-spacing-md transition-colors duration-transition-base pl-4 tablet:pl-10 shadow-md hover:shadow-lg cursor-pointer relative overflow-hidden"
        >
          <!-- Shimmer effect -->
          <div
            class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1500 bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,0.9)_50%,transparent_65%)]"
          ></div>
          <span class="relative z-10">GET A TICKET</span>
          <div
            class="w-12 h-12 tablet:w-16 tablet:h-16 desktop-xl:w-24 desktop-xl:h-24 -mr-1 bg-black rounded-full flex items-center justify-center shrink-0 ml-2 tablet:ml-4 relative z-10 transition-transform duration-500 group-hover/btn:scale-110 group-active/btn:scale-90"
          >
            <svg
              class="w-6 h-6 tablet:w-5 tablet:h-5 desktop-xl:w-7 desktop-xl:h-7 text-primary ml-0.5 transition-transform duration-500 group-hover/btn:scale-[0.909] group-active/btn:scale-[1.111]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>
      </div>

      <!-- Countdown Timer -->
      <div
        class="flex text-[11px] text-text-muted font-medium tracking-widest uppercase px-4 pt-2 tablet:px-0 items-center justify-center tablet:justify-start w-full leading-5 tablet:text-md desktop-xxl:text-[16px]"
      >
        {days} Days
        <img
          src={asset("/images/big_tilde.svg")}
          alt=""
          class="inline h-2 mx-3"
        />
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(
          2,
          "0"
        )}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
    <!-- Bottom Content with Social Links -->
    <div
      class="flex items-center justify-between pt-spacing-xl h-11 tablet:h-11 tablet:pb-11 desktop-xxl:pb-8 px-4 pt-8 tablet:px-0"
    >
      <SocialIcons />
      <div>
        <a
          href="https://openapis.org"
          class="text-text-secondary hover:text-primary active:text-primary-green-dark text-[11px] desktop-xl:text-[13px] font-light transition-colors duration-transition-fast tracking-widest"
        >
          OPENAPIS.ORG
        </a>
      </div>
    </div>
  </div>

  <!-- Right Content Container (1/3) - Hidden on mobile -->
  <a
    href="https://maps.google.com/?q=CNIT+Forest,+2+Pl.+de+la+Defense,+92092+Puteaux,+France"
    target="_blank"
    rel="noopener noreferrer"
    class="group/loc hidden tablet:flex flex-col w-full tablet:w-1/3 min-h-[300px] tablet:min-h-0 border-0 tablet:border-l tablet:border-l-border-primary bg-bg-dark-elevated overflow-hidden relative cursor-pointer"
  >
    <!-- Background Image -->
    <div class="w-full h-full relative">
      <!-- Dark Overlay -->
      <div
        class="absolute z-10 inset-0 transition-colors duration-300 group-hover/loc:bg-[#00000080] group-active/loc:bg-[#000000a0]"
      ></div>

      <div
        class="w-full h-full absolute bg-cover bg-center bg-pan-slow"
        style="background-image: url({asset(
          '/images/background/background_top_right.jpg'
        )})"
      ></div>

      <!-- Location Content Overlay -->
      <div
        class="z-20 absolute px-4 py-4 tablet:px-8 tablet:pb-16 tablet:py-8 desktop-xl:p-16 desktop-xxl:p-24 inset-0 flex flex-col justify-between"
      >
        <!-- Location Pin Icon -->
        <div
          class="shrink-0 bg-black rounded-full flex items-center w-12 h-12 tablet:w-16 tablet:h-16 desktop-xl:w-24 desktop-xl:h-24 justify-center transition-colors duration-300 group-hover/loc:bg-primary"
        >
          <svg
            class="w-6 h-6 tablet:w-10 tablet:h-10 desktop-xl:w-14 desktop-xl:h-14 text-primary transition-colors duration-300 group-hover/loc:text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
        </div>

        <!-- Location Details at Bottom -->
        <div
          class="flex flex-col gap-2 tablet:gap-8 desktop-xxl:gap-6 shrink-0"
        >
          <div
            class="text-xl tablet:text-2xl desktop-xl:text-[44px] desktop-xxl:text-[44px] font-bold text-text-primary leading-[1.10] tracking-wide transition-colors duration-300 group-hover/loc:text-primary"
          >
            CNIT FOREST, <br />PARIS
          </div>
          <div
            class="text-xs tablet:text-sm text-text-muted leading-tight tracking-[0.2em] desktop-xl:text-[13px] desktop-xl:leading-[20px] transition-colors duration-300 group-hover/loc:text-white"
          >
            2 PL. DE LA DEFENSE,<br />92092 PUTEAUX,<br />FRANCE
          </div>
        </div>
      </div>
    </div>
  </a>
</header>

<!-- Calendar Popup -->
<AddToCalendarPopup
  isOpen={showCalendarPopup}
  onClose={() => (showCalendarPopup = false)}
/>

<style>
  @keyframes bg-pan-transform {
    0% {
      transform: scale(1.15) translateX(-4%);
    }
    100% {
      transform: scale(1.15) translateX(4%);
    }
  }

  .bg-pan-slow {
    position: relative;
    overflow: hidden;
  }

  .bg-pan-slow::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: inherit;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: bg-pan-transform 35s ease-in-out infinite alternate;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    z-index: 0;
  }

  .bg-pan-slow > * {
    position: relative;
    z-index: 1;
  }
</style>
