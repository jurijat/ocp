<script lang="ts">
  import SocialIcons from "../HeaderHero/SocialIcons.svelte";
</script>

<footer
  class="p-16 flex flex-row flex-nowrap min-h-[210px] items-center bg-black"
>
  <!-- Left Content Container (2/3) -->
  <div class="flex w-2/3 flex-col gap-y-6">
    <!-- Contact Information -->
    <div class="flex flex-col gap-y-4">
      <p class="text-base text-text-secondary tracking-wide">
        For any questions about the OAI Track, please contact
        <a
          href="mailto:oai-track@openapis.org"
          class="text-text-primary hover:text-primary transition-colors"
        >
          oai-track@openapis.org
        </a>
      </p>

      <!-- Links Section -->
      <div class="flex items-center gap-10 font-extralight">
        <!-- OPENAPIS.ORG Link -->
        <a
          href="https://openapis.org"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-primary text-sm font-medium transition-colors tracking-widest uppercase"
        >
          OPENAPIS.ORG
        </a>

        <!-- Code of Conduct Link with Copy Icon -->
        <a
          href="#"
          class="text-text-secondary hover:text-primary text-sm font-medium transition-colors tracking-widest uppercase flex items-center gap-2"
        >
          Code of Conduct
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="Copy"
          >
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Right Content Container (1/3) -->
  <div class="flex w-1/3 items-center justify-end">
    <SocialIcons />
  </div>
</footer>
