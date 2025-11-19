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
  class="flex flex-col tablet:flex-row h-[710px] tablet:min-h-0 tablet:h-[clamp(800px,50vw+320px,1280px)] text-text-primary overflow-hidden"
>
  <!-- Left Content Container (2/3) -->
  <div
    class="flex w-full tablet:w-2/3 flex-col gap-y-6 tablet:gap-y-3 tablet:px-4 tablet:py-8 desktop:p-16 tablet:border-r-border-primary pt-6"
  >
    <!-- Logos Section -->
    <div
      class="flex flex-row w-full items-center h-12 tablet:h-[64px] p-4 tablet:py-4 desktop:py-8 desktop:pt-20 tablet:px-0 justify-between"
    >
      <div
        class="w-40 tablet:w-44 tablet:pl-4 h-12 tablet:h-[64px] desktop:h-16 desktop:w-60 flex items-center justify-center text-text-muted text-sm"
      >
        <img
          src={asset("/images/openapi_con_logo.svg")}
          alt="OpenAPI Conference Logo"
          class="w-40 tablet:w-[243px] h-12 tablet:h-[64px]"
        />
      </div>
      <div
        class="w-16 tablet:w-24 h-12 tablet:h-[64px] flex items-center justify-center text-text-muted text-sm"
      >
        <img
          src={asset("/images/img_hosted_by_fost.png")}
          alt="Hosted by Fost Logo"
          class="w-16 tablet:w-24 h-3 tablet:h-[16px]"
        />
      </div>
    </div>

    <!-- Title Section -->
    <div class="flex flex-col p-4 tablet:py-4 tablet:px-0 pt-2 tablet:pt-10">
      <h1
        class="text-6xl tablet:text-[clamp(80px,5vw+32px,160px)] font-bold tracking-tighter leading-[0.92] tablet:leading-[1.1] desktop:leading-[1.00] wrap-break-word"
      >
        <span class="text-primary block">OPENAPI</span>
        <span class="text-text-primary block">CONFERENCE</span>
        <span class="text-text-primary block">IN PARIS</span>
      </h1>
    </div>

    <!-- Decorative Line (tablet/desktop) -->
    <div
      class="hidden tablet:block w-full h-px my-4 bg-primary-green-muted"
    ></div>

    <!-- Decorative Line (mobile) -->
    <div
      class="tablet:hidden w-full h-px bg-primary-green-muted mt-0 -mb-6"
    ></div>

    <!-- Subtitle with Date and Calendar -->
    <div
      class="flex flex-row items-center justify-between gap-2 tablet:gap-spacing-lg border-0 tablet:border-0 rounded-lg tablet:rounded-none p-3 tablet:p-0 rounded-b-4xl h-16 bg-bg-dark tablet:bg-transparent relative z-10"
    >
      <div
        class="text-base tablet:text-md tracking-widest desktop:text-3xl font-bold text-text-primary uppercase"
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
        class="text-xs tablet:text-xs transition-colors duration-transition-fast uppercase text-text-muted hover:text-primary hover:cursor-pointer tracking-widest leading-tightest"
      >
        + Add to calendar
      </a>
    </div>

    <!-- Mobile-only Location Card (beneath date section) -->
    <div
      class="tablet:hidden p-4 relative h-[152px] -mt-12 rounded-b-4xl overflow-hidden bg-cover bg-center"
      style="background-image: url({asset(
        '/images/background/background_top_right.jpg'
      )})"
    >
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-[#00000070]"></div>

      <!-- Content -->
      <div class="absolute inset-0 flex items-center justify-between px-4 pt-4">
        <div class="flex flex-col">
          <span class="text-xl font-bold text-text-primary tracking-widest"
            >CNIT FOREST, PARIS</span
          >
          <span class="text-sm text-white tracking-widest"
            >2 PL. DE LA DEFENSE, 92092 PUTEAUX</span
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
    </div>

    <!-- Register Button -->
    <div class="px-4 tablet:px-0">
      <a
        href="https://www.openapis.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="group/btn bg-primary mt-4 tablet:mt-4 desktop:mt-12 rounded-full flex font-bold tracking-wide px-4 tablet:px-spacing-2xl items-center justify-between h-16 tablet:h-20 desktop:h-30 w-full hover:bg-primary-dark text-text-on-green text-xl tablet:text-3xl desktop:text-[42px] uppercase py-spacing-md transition-colors duration-transition-base pl-4 tablet:pl-10 shadow-md hover:shadow-lg cursor-pointer relative overflow-hidden"
      >
        <!-- Shimmer effect -->
        <div
          class="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        ></div>
        <span class="relative z-10">GET A TICKET</span>
        <div
          class="w-12 h-12 tablet:w-16 tablet:h-16 desktop:w-24 desktop:h-24 -mr-1 bg-black rounded-full flex items-center justify-center shrink-0 ml-2 tablet:ml-4 relative z-10 transition-transform duration-300 group-hover/btn:scale-110"
        >
          <svg
            class="w-6 h-6 tablet:w-5 tablet:h-5 desktop:w-7 desktop:h-7 text-primary ml-0.5"
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
      class="flex text-xs text-text-muted font-medium tracking-widest uppercase px-4 tablet:px-0 items-center justify-center tablet:justify-start w-full tablet:text-md desktop:text-lg"
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

    <!-- Bottom Content with Social Links -->
    <div
      class="flex items-center justify-between mt-auto pt-spacing-xl tablet:pb-4 desktop:pb-8 px-4 tablet:px-0"
    >
      <SocialIcons />
      <div>
        <a
          href="https://openapis.org"
          class="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-transition-fast tracking-widest"
        >
          OPENAPIS.ORG
        </a>
      </div>
    </div>
  </div>

  <!-- Right Content Container (1/3) - Hidden on mobile -->
  <div
    class="group/loc hidden tablet:flex flex-col w-full tablet:w-1/3 min-h-[300px] tablet:min-h-0 border-0 tablet:border-l tablet:border-l-border-primary bg-bg-dark-elevated overflow-hidden relative"
  >
    <!-- Background Image -->
    <div
      class="w-full h-full relative bg-cover bg-center"
      style="background-image: url({asset(
        '/images/background/background_top_right.jpg'
      )})"
    >
      <!-- Dark Overlay -->
      <div
        class="absolute inset-0 bg-[#00000052] transition-colors duration-300 group-hover/loc:bg-[#00000080]"
      ></div>

      <!-- Location Content Overlay -->
      <div
        class="absolute px-4 py-4 tablet:px-8 tablet:py-8 desktop:px-16 desktop:py-16 inset-0 flex flex-col justify-between"
      >
        <!-- Location Pin Icon -->
        <div
          class="shrink-0 bg-black rounded-full flex items-center w-12 h-12 tablet:w-16 tablet:h-16 desktop:w-24 desktop:h-24 justify-center transition-colors duration-300 group-hover/loc:bg-primary"
        >
          <svg
            class="w-6 h-6 tablet:w-10 tablet:h-10 desktop:w-14 desktop:h-14 text-primary transition-colors duration-300 group-hover/loc:text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
        </div>

        <!-- Location Details at Bottom -->
        <div class="flex flex-col gap-2 tablet:gap-4 desktop:gap-6 shrink-0">
          <h2
            class="text-xl tablet:text-2xl desktop:text-3xl font-bold text-text-primary leading-tight tracking-widest transition-colors duration-300 group-hover/loc:text-primary"
          >
            CNIT FOREST, <br />PARIS
          </h2>
          <div
            class="text-xs tablet:text-sm text-text-muted leading-tight tracking-widest transition-colors duration-300 group-hover/loc:text-white"
          >
            2 PL. DE LA DEFENSE,<br />92092 PUTEAUX,<br />FRANCE
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- Calendar Popup -->
<AddToCalendarPopup
  isOpen={showCalendarPopup}
  onClose={() => (showCalendarPopup = false)}
/>
