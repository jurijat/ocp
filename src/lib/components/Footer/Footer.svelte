<script lang="ts">
  import SocialIcons from "../HeaderHero/SocialIcons.svelte";
</script>

<footer
  class="p-4 tablet:p-8 desktop-xl:p-16 flex flex-col tablet:flex-row gap-6 tablet:gap-0 min-h-[210px] items-center bg-black"
>
  <!-- Mobile Layout -->
  <div class="tablet:hidden flex flex-col items-center gap-6 w-full">
    <!-- 1. Text -->
    <p class="text-sm text-text-secondary tracking-wide text-center">
      For any questions about the OAI Track, please contact
      <a
        href="mailto:oai-track@openapis.org"
        class="text-text-primary hover:text-primary active:text-primary-green-dark transition-colors"
      >
        oai-track@openapis.org
      </a>
    </p>

    <!-- 2. Icons -->
    <SocialIcons />

    <!-- 3. OpenAPIs Link -->
    <a
      href="https://openapis.org"
      target="_blank"
      rel="noopener noreferrer"
      class="text-text-secondary hover:text-primary active:text-primary-green-dark text-sm font-medium transition-colors tracking-widest uppercase"
    >
      OPENAPIS.ORG
    </a>

    <!-- 4. Code of Conduct -->
    <a
      href="https://github.com/OAI/.github/blob/main/.github/CODE_OF_CONDUCT.md"
      target="_blank"
      rel="noopener noreferrer"
      class="text-text-secondary hover:text-primary active:text-primary-green-dark text-sm font-medium transition-colors tracking-widest uppercase flex items-center gap-2"
    >
      Code of Conduct
      <svg
        class="w-4 h-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="External link"
      >
        <path
          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        />
      </svg>
    </a>
  </div>

  <!-- Tablet/Desktop Layout -->
  <!-- Left Content Container (2/3) -->
  <div class="hidden tablet:flex w-full tablet:w-2/3 flex-col gap-y-6">
    <!-- Contact Information -->
    <div class="flex flex-col gap-y-4 text-left">
      <p class="text-base text-text-secondary tracking-wide">
        For any questions about the OAI Track, please contact
        <a
          href="mailto:oai-track@openapis.org"
          class="text-text-primary hover:text-primary active:text-primary-green-dark transition-colors"
        >
          oai-track@openapis.org
        </a>
      </p>

      <!-- Links Section -->
      <div
        class="flex flex-wrap justify-start items-center gap-10 font-extralight"
      >
        <!-- OPENAPIS.ORG Link -->
        <a
          href="https://openapis.org"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-primary active:text-primary-green-dark text-sm font-medium transition-colors tracking-widest uppercase"
        >
          OPENAPIS.ORG
        </a>

        <!-- Code of Conduct Link with Copy Icon -->
        <a
          href="https://github.com/OAI/.github/blob/main/.github/CODE_OF_CONDUCT.md"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-primary active:text-primary-green-dark text-sm font-medium transition-colors tracking-widest uppercase flex items-center gap-2"
        >
          Code of Conduct
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="External link"
          >
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Right Content Container (1/3) - Tablet/Desktop only -->
  <div class="hidden tablet:flex w-full tablet:w-1/3 items-center justify-end">
    <SocialIcons />
  </div>
</footer>
